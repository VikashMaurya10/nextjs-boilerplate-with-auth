import CryptoJS from 'crypto-js';
import { env } from './env';

const ENCRYPTION_KEY = env.NEXT_PUBLIC_ENCRYPTION_KEY

export const encrypt = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
};

export const decrypt = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Check if storage quota is exceeded
export const getStorageQuota = () => {
  if (typeof window === 'undefined') {
    return { usage: 0, quota: 0, percentage: 0 };
  }

  let totalSize = 0;
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalSize += localStorage[key].length * 2; // UTF-16 uses 2 bytes per character
    }
  }

  // Approximate quota (varies by browser)
  const quota = 5 * 1024 * 1024; // 5MB
  return {
    usage: totalSize,
    quota,
    percentage: (totalSize / quota) * 100
  };
};

// Debounce function for frequent updates
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Check if an item is expired
export const isExpired = (item) => {
  if (!item.expiry) return false;
  return Date.now() > item.expiry;
};

// Migrate data to new version
export const migrateData = (data, currentVersion, migrations) => {
  let migratedData = data;
  const sortedMigrations = migrations
    .filter((m) => m.version > currentVersion)
    .sort((a, b) => a.version - b.version);
    
  for (const migration of sortedMigrations) {
    migratedData = migration.migrate(migratedData);
  }

  return migratedData;
};
