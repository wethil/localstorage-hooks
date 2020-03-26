import { useState } from 'react';

export const initialState = {
  checkDate: {
    checkIn: undefined,
    checkOut: undefined,
  },
  roomInfo: {
    roomType: null,
    roomView: null,
  },
  paymentData: {
    creditCardNumber: '',
    expireDate: '',
    creditCardHolder: '',
    cvc: ''
  },
  error: {}
};

function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      return initialState;
    }
  });

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
