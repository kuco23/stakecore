import { create } from 'zustand'


export const useGlobalStore = create<GlobalState>((set) => ({
  walletProvider: null,
  setWalletProvider: (provider: EIP6963ProviderDetail) => set({ walletProvider: provider }),
  walletAddress: null,
  setWalletAddress: (address: string, provider?: EIP6963ProviderDetail) => set(state => ({
    walletAddress: address,
    walletProvider: (provider === undefined) ? state.walletProvider : provider
  })),
  walletVisible: false,
  setWalletVisible: (visible: boolean) => set({ walletVisible: visible }),
}))