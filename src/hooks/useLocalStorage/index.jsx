'use client';

import { LOCAL_STORAGE_PREFIX, localStorageConfig } from '@/config';
import { debounce, decrypt, encrypt, getStorageQuota, isExpired, migrateData } from '@/lib';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const LocalStorageContext = createContext(undefined);

export const LocalStorageProvider = ({ children, migrations = [], debounceTime = 300 }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getItem = useCallback(
    (key) => {
      if (!isClient) return null;

      try {
        const item = localStorage.getItem(key);
        if (!item) return null;

        let parsedItem;

        try {
          // Try parsing plain JSON first
          parsedItem = JSON.parse(item);

          // If it's encrypted, decrypt it
          if (parsedItem?.__encrypted) {
            parsedItem = JSON.parse(decrypt(item));
          }
        } catch (err) {
          // If plain parse failed, try decrypting (for backward compatibility)
          try {
            parsedItem = JSON.parse(decrypt(item));
          } catch (decryptError) {
            console.error(`Error decrypting localStorage key "${key}":`, decryptError);
            return null;
          }
        }

        // Check expiry
        if (isExpired(parsedItem)) {
          localStorage.removeItem(key);
          return null;
        }

        // Handle migrations
        if (migrations.length && parsedItem.version !== undefined) {
          const migratedData = migrateData(parsedItem.value, parsedItem.version, migrations);
          return migratedData;
        }

        return parsedItem.value;
      } catch (error) {
        console.error(`Error reading from localStorage key "${key}":`, error);
        return null;
      }
    },
    [isClient, migrations]
  );

  const setItem = useCallback(
    (key, value, options = {}) => {
      if (!isClient) return;

      try {
        const storageItem = {
          value,
          version: options.version,
          ...(options.expiry && { expiry: Date.now() + options.expiry }),
          __encrypted: options.encrypt ?? false,
        };

        const serializedValue = JSON.stringify(storageItem);
        const valueToStore = options.encrypt ? encrypt(serializedValue) : serializedValue;

        // Check quota before storing
        const { percentage } = getStorageQuota();
        if (percentage >= 90) {
          throw new Error('localStorage quota is almost full');
        }

        localStorage.setItem(key, valueToStore);
      } catch (error) {
        console.error(`Error writing to localStorage key "${key}":`, error);
        if (error.name === 'QuotaExceededError') {
          // Attempt to clear expired items and retry
          clearExpired();
          try {
            localStorage.setItem(key, value);
          } catch (retryError) {
            console.error('Failed to write to localStorage even after clearing expired items');
          }
        }
      }
    },
    [isClient]
  );

  const debouncedSetItem = useCallback(debounce(setItem, debounceTime), [setItem, debounceTime]);

  const removeItem = useCallback(
    (key) => {
      if (isClient) {
        try {
          localStorage.removeItem(key);
        } catch (error) {
          console.error(`Error removing localStorage key "${key}":`, error);
        }
      }
    },
    [isClient]
  );

  const clearExpired = useCallback(() => {
    if (!isClient) return;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        getItem(key); // This will automatically remove if expired
      }
    }
  }, [isClient, getItem]);

  // const clear = useCallback(() => {
  //   if (isClient) {
  //     try {
  //       localStorage.clear();
  //     } catch (error) {
  //       console.error('Error clearing localStorage:', error);
  //     }
  //   }
  // }, [isClient]);

  // const getAll = useCallback(() => {
  //   if (!isClient) return {};

  //   const all = {};
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     if (key) {
  //       all[key] = getItem(key);
  //     }
  //   }
  //   return all;
  // }, [isClient, getItem]);

  // const setMany = useCallback(
  //   (items, options = {}) => {
  //     Object.entries(items).forEach(([key, value]) => {
  //       setItem(key, value, options);
  //     });
  //   },
  //   [setItem]
  // );

  // const removeMany = useCallback(
  //   (keys) => {
  //     keys.forEach((key) => removeItem(key));
  //   },
  //   [removeItem]
  // );

  const value = {
    getItem,
    setItem: debouncedSetItem,
    clearExpired
  };

  return <LocalStorageContext.Provider value={value}>{children}</LocalStorageContext.Provider>;
};

export function useLocalStorage(
  key = 'data',
  initialValue = {},
  options = localStorageConfig || {}
) {
  const context = useContext(LocalStorageContext);

  if (!context) {
    throw new Error('useLocalStorage must be used within a LocalStorageProvider');
  }

  const prefixedKey = LOCAL_STORAGE_PREFIX + key;
  const { getItem, setItem } = context;
  const [isLoading, setIsLoading] = useState(true);

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = getItem(prefixedKey);
      return item !== null ? item : initialValue;
    } catch (error) {
      console.error('Error loading initial data from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = getItem(prefixedKey);
      if (item !== null) {
        setStoredValue(item);
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, [prefixedKey, getItem]);

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        setItem(prefixedKey, valueToStore, options);
      } catch (error) {
        console.error('Error saving data to localStorage:', error);
      }
    },
    [prefixedKey, setItem, storedValue, options]
  );

  return {
    value: storedValue,
    setValue,
    isLoading
  };
}
