import { create } from 'zustand'

interface StyleState {
    width: number
    setWidth: (width: number) => void
}

export const useStyleStore = create<StyleState>()((set, get) => ({
    width: 0,
    setWidth: (value: number) => {
        set({ width: value })
        // , console.log(get().width)
    }

}))