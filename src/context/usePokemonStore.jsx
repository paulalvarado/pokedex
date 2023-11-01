import { create } from 'zustand'

export const usePokemonStore = create((set) => ({
    pokemones: [],
    setPokemones: (pokemones) => set({ pokemones }),
    offset: 0,
    setOffset: (offset) => set({ offset }),
}))