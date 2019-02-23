import { useState, useEffect, useCallback } from 'react';
import { on } from 'util/consoles';

export function useOperation(initialValue, mapping) {
  const [value, setValue] = useState(initialValue);
  const operation = useCallback((...args) => setValue(value => mapping(value, ...args)));
  return [value, operation];
}

export function useToggle(initialValue = false) {
  return useOperation(initialValue, value => !value);
}

export function useCount(initialValue = 0) {
  return useOperation(initialValue, value => value + 1);
}

export function useArray(initialValue = []) {
  return useOperation(initialValue, (array, item) => {
    array.push(item);
    return array;
  });
}

export function useConsole() {
  const [messages, push] = useArray();
  useEffect(() => {
    return on.warn(push);
  });
  return [messages];
}