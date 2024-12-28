'use client';

import { LOCAL_STORAGE_PREFIX } from '@/config';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Create the context
const LocalStorageContext = createContext(undefined);

// Create the provider component
const LocalStorageProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getItem = useCallback(
    (key) => {
      if (isClient) {
        return localStorage.getItem(key);
      }
      return null;
    },
    [isClient]
  );

  const setItem = useCallback(
    (key, value) => {
      if (isClient) {
        localStorage.setItem(key, value);
      }
    },
    [isClient]
  );

  const removeItem = useCallback(
    (key) => {
      if (isClient) {
        localStorage.removeItem(key);
      }
    },
    [isClient]
  );

  return (
    <LocalStorageContext.Provider value={{ getItem, setItem, removeItem }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Create the custom hook
const useLocalStorage = (key = 'data', initialValue = {}) => {
  const context = useContext(LocalStorageContext);

  if (!context) {
    throw new Error('useLocalStorage must be used within a LocalStorageProvider');
  }

  const { getItem, setItem } = context;
  const prefiedKey = LOCAL_STORAGE_PREFIX + key;

  const [storedValue, setStoredValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const item = getItem(prefiedKey);
        if (item !== null) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredValue();
  }, [prefiedKey, getItem]);

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        setItem(prefiedKey, JSON.stringify(valueToStore));
      } catch (error) {
        console.error('Error saving data to localStorage:', error);
      }
    },
    [prefiedKey, setItem, storedValue]
  );

  return { value: storedValue, setValue, isLoading };
};

export { LocalStorageProvider, useLocalStorage };
