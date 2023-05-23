"use client";
import { useState, useEffect } from 'react';


const useLocalStorage = (key, initialValue) => {

  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } else {
      return initialValue;
    }

  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage){
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;