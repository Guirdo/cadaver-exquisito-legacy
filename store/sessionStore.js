import { create } from 'zustand'

const useSessionStore = create((set) => ({
  user: null,
  profile: null,
  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  cleanSession: () => set({ user: null, profile: null })
}))

export default useSessionStore
