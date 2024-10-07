import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
  username: string[]
  setUsername: (username: string) => void
  removeUsername: (username: string) => void
  clearUsernames: () => void
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: [],
      setUsername: (newUsername: string) =>
        set((state) => ({
          username: [...state.username, newUsername],
        })),
      removeUsername: (removeUsername: string) =>
        set((state) => ({
          username: state.username.filter((name) => name !== removeUsername),
        })),
      clearUsernames: () =>
        set(() => ({
          username: [],
        })),
    }),
    {
      name: 'user-storage', // 로컬 스토리지에 저장될 키
    }
  )
)

export default useUserStore
