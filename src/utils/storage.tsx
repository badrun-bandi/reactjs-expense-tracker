import { useEffect, useState } from "react"
import { AppStorage } from "../models/common"

class LocalStorage implements AppStorage {
  getItem(key: string) {
    const item = localStorage.getItem(key)

    if (item === null) return undefined
    if (item === "null") return null
    if (item === "undefined") return undefined

    try {
      return JSON.parse(item)
    } catch { }

    return item
  }
  setItem(key: string, value: any) {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }
}

class MockStorage implements AppStorage {
  getItem() {
    return null
  }
  setItem() { }
}

export const appStorage = window?.localStorage
  ? new LocalStorage()
  : new MockStorage();

export function useStorageValue<T>(key: string, initialValue?: T) {
  const [value, setValue] = useState<T>(() => {
    const valueFromStorage = appStorage.getItem(key)

    if (
      typeof initialValue === "object" &&
      !Array.isArray(initialValue) &&
      initialValue !== null
    ) {
      return {
        ...initialValue,
        ...valueFromStorage,
      }
    }
    return valueFromStorage || initialValue
  })

  useEffect(() => {
    appStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue] as const
}