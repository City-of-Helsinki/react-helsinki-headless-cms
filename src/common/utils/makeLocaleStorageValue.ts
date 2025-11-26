import { useCallback, useState } from 'react';

type Options<T> = {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
};

// Utility function to check if we are in a browser environment
const isBrowser = () => typeof window !== 'undefined';

export default function makeLocaleStorageValue<T>(
  key: string,
  options?: Partial<Options<T>>,
) {
  const {
    serializer: serialize = JSON.stringify,
    deserializer: deserialize = JSON.parse,
  } = options ?? {};

  return function useLocaleStorageValue(): [T | null, (value?: T) => void] {
    const readValueInLocalStorage = () => {
      if (!isBrowser()) {
        return null;
      }
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? deserialize(storedValue) : null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        // eslint-disable-next-line no-console
        console.error('Failed to parse value in localStorage', { key });
      }

      return null;
    };

    const [stateValue, setStateValue] = useState<T | null>(() =>
      readValueInLocalStorage(),
    );

    const storeValue = useCallback((value?: T) => {
      if (!isBrowser()) {
        return;
      }
      try {
        if (value) {
          setStateValue(value);
          localStorage.setItem(key, serialize(value));
        } else {
          setStateValue(null);
          localStorage.removeItem(key);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        // eslint-disable-next-line no-console
        console.error('Failed to save value into localStorage', { key });
      }
    }, []);

    return [stateValue, storeValue];
  };
}
