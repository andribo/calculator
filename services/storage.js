const storageKey = 'calc-input'

export const storage = {
  get: () => {
    return localStorage.getItem(storageKey) || ''
  },
  set: input => {
    localStorage.setItem(storageKey, input)
  },
  clear: () => {
    localStorage.removeItem(storageKey)
  }
}
