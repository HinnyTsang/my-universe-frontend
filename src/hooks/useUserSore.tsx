import { create } from 'zustand'

interface UserState {
    isOtherUser: boolean
    setIsOtherUser: (isOtherUser: boolean) => void
}

export const useUserStore = create<UserState>()((set) => ({
    isOtherUser: false,
    setIsOtherUser: (bool: boolean) => set({ isOtherUser: bool })
}))