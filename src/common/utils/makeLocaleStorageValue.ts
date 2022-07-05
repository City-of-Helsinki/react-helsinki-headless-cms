import { useCallback, useState } from 'react';

type Options<T> = {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
};

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
      try {
        return deserialize(localStorage.getItem(key));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Failed to parse value in localStorage');
      }

      return null;
    };

    const [stateValue, setStateValue] = useState<T | null>(() =>
      readValueInLocalStorage(),
    );

    const storeValue = useCallback((value?: T) => {
      try {
        if (value) {
          setStateValue(value);
          localStorage.setItem(key, serialize(value));
        } else {
          setStateValue(undefined);
          localStorage.removeItem(key);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Failed to save value into localStorage');
      }
    }, []);

    return [stateValue, storeValue];
  };
}
