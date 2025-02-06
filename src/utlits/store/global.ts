import { create } from 'zustand'

export const useStore = create<GlobalState>((set) => ({
  walletProvider: null,
  walletAddress: null,
  walletProviders: null,
  setWalletProvider: (provider: EIP6963ProviderDetail) => set({ walletProvider: provider }),
  setWalletAddress: (address: string) => set({ walletAddress: address }),
  addWalletProvider: (provider: EIP6963ProviderDetail) => set((state) => {
    const walletProviders = state.walletProviders ?? []
    return { walletProviders: [...walletProviders, provider] }
  })
}))