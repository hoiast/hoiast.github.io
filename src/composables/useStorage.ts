import { ref, watch } from "vue";

export function useStorage(key: string, value: unknown = "") {
  const storedValue = read();
  const refValue = ref();

  if (storedValue) {
    refValue.value = storedValue;
  } else {
    refValue.value = value;
    write(refValue.value);
  }

  watch(refValue, write, { deep: true });

  function write(newValue: unknown) {
    if (newValue === "") {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }
  function read() {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
  }

  return refValue;
}
