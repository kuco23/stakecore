import { Eip1193Provider } from 'ethers'
import { chainId } from '../data/constants'
import { useGlobalStore } from '../store/global'
import { getAccounts, getChainId, tryAutoConnect } from './eip1193'
import type { MetaMaskInpageProvider } from '@metamask/providers'


export async function addEip6963Hook(wallet: EIP6963ProviderDetail): Promise<void> {
  const { setWalletAddress, setWalletProvider } = useGlobalStore.getState()
  attachAccountChangeHandler(wallet.provider, setWalletAddress)
  attachChainChangeHandler(wallet.provider, setWalletAddress)
  const address = await tryAutoConnect(wallet)
  if (address !== null) {
    setWalletProvider(wallet)
    setWalletAddress(address)
  }
}

function attachAccountChangeHandler(wallet: Eip1193Provider, hook: (x: string | null) => void): void {
  const metamask = wallet as MetaMaskInpageProvider
  metamask?.on('accountsChanged', async (accounts) => {
    const _chainId = await getChainId(wallet)
    if (_chainId == chainId) {
      hook(accounts[0])
    } else {
      hook(null)
    }
  })
}

function attachChainChangeHandler(wallet: Eip1193Provider, hook: (x: string | null) => void): void {
  const metamask = wallet as MetaMaskInpageProvider
  metamask?.on('chainChanged', async _chainId => {
    if (_chainId === chainId) {
      const accounts = await getAccounts(wallet)
      hook(accounts[0])
    } else {
      hook(null)
    }
  })
}