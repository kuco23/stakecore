import { chainId } from '../../utlits/data/constants'
import { useStore } from '../../utlits/store/global'
import { getAccounts, getChainId } from '../../utlits/wallet/eip1193'
import type { MetaMaskInpageProvider } from '@metamask/providers'


export function addEip6963Hook(wallet: EIP6963ProviderDetail): void {
  const { setWalletAddress, addWalletProvider } = useStore.getState()
  addWalletProvider(wallet)
  const metamask = wallet.provider as MetaMaskInpageProvider
  if (metamask.on === undefined) return // EIP-1193 does no guarantee `on`
  metamask.on('accountsChanged', async (accounts) => {
    const _chainId = await getChainId(wallet.provider)
    if (_chainId == chainId) {
      setWalletAddress(accounts[0])
    } else {
      setWalletAddress(null)
    }
  })
  metamask.on('chainChanged', async chainId => {
    const _chainId = await getChainId(wallet.provider)
    if (_chainId === chainId) {
      const accounts = await getAccounts(wallet.provider)
      setWalletAddress(accounts[0])
    } else {
      setWalletAddress(null)
    }
  })
}