import { create } from 'zustand'

const useErrorStore = create((set) => ({
  errorMessage: null,
  setErrorMessage: (message) => set({ errorMessage: message })
}))

export default useErrorStore
