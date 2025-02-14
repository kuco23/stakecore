import { create } from 'zustand'


export const useGlobalStore = create<GlobalState>((set) => ({
  walletProvider: null,
  setWalletProvider: (provider: EIP6963ProviderDetail) => set({ walletProvider: provider }),
  walletAddress: null,
  setWalletAddress: (address: string) => set({ walletAddress: address }),
  walletVisible: false,
  setWalletVisible: (visible: boolean) => set({ walletVisible: visible }),
}))