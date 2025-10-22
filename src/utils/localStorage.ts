import { LocalStorageKey } from '@/types/localStorage'

export const setLocalStorageItem = <T>(key: LocalStorageKey, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageItem = (key: LocalStorageKey) => {
  const stored = localStorage.getItem(key)
  if (!stored) return null

  return JSON.parse(stored)
}
