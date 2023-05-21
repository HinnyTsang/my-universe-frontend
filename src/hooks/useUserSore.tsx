import { create } from 'zustand'

interface UserState {
    isOtherUser: boolean
    setIsOtherUser: (isOtherUser: boolean) => void

    uid: string | undefined
    setUid: (uid: string) => void

    newMessage: NewMessage
    setNewMessage: (newMessage: NewMessage) => void

}

interface NewMessage {
    id: string,
    isNewMessage: boolean
}

export const useUserStore = create<UserState>()((set, get) => ({
    isOtherUser: false,
    setIsOtherUser: (bool: boolean) => set({ isOtherUser: bool }),

    uid: undefined,
    setUid: (value: string) => {
        set({ uid: value })
        // ,console.log(get().uid);
    },

    newMessage: {
        id: "",
        isNewMessage: false
    },

    setNewMessage: (value: NewMessage) => set({ newMessage: value })


}))