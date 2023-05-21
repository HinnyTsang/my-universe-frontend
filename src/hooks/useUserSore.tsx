import { create } from 'zustand'

interface UserState {
    isOtherUser: boolean
    setIsOtherUser: (isOtherUser: boolean) => void

    uid: string | undefined
    setUid: (uid: string) => void
}

export const useUserStore = create<UserState>()((set, get) => ({
    isOtherUser: false,
    setIsOtherUser: (bool: boolean) => set({ isOtherUser: bool }),

    uid: undefined,
    setUid: (value: string) => {
        set({ uid: value })
        // ,console.log(get().uid);
    }

}))