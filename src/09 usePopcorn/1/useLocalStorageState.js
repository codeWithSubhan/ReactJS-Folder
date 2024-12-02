import { useEffect, useState } from "react";

function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storeValue = localStorage.getItem(key);
    return JSON.parse(storeValue);
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}

export default useLocalStorageState;
