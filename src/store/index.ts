import { create } from 'zustand'

interface UserState {
  username: string[]
  setUsername: (username: string) => void
  removeUsername: (username: string) => void
  clearUsernames: () => void
}

const useUserStore = create<UserState>((set) => ({
  username: [
    '김진우',
    '정의왕',
    '강병호',
    '오석진',
    '이현빈',
    '김영진',
    '최수완',
    '김건우',
    '테스트하는',
    '임준표',
    '이선호',
    '새로운 닉네임',
    '박선홍',
    '김수민',
    '윤상필',
    '이병진',
    '고혜연',
    '윤성아',
  ],
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
      username: [' '],
    })),
}))

export default useUserStore
