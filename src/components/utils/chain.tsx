import { useStore } from "../../utlits/store/global"
import { chainId } from "../../utlits/data/constants"
import { connectWallet } from "../../utlits/wallet/connect"
import { getAccounts, getChainId, requestAccounts, switchNetworkIfNecessary } from "../../utlits/wallet/eip1193"
import { delegate as _delegate } from "../../utlits/wallet/contracts"


export async function delegate(): Promise<void> {
  let { walletProvider } = useStore.getState()
  if (walletProvider == null) {
    walletProvider = await tryAutomaticallyConnect()
    if (walletProvider == null) {
      return connectWallet()
    }
  }
  if (!await switchNetworkIfNecessary(walletProvider.provider)) return
  const { walletAddress, setWalletAddress } = useStore.getState()
  if (walletAddress == null) {
    const addresses = await requestAccounts(walletProvider.provider)
    if (!addresses.length) return
    setWalletAddress(addresses[0])
  }
  return _delegate(walletProvider.provider)
}

async function tryAutomaticallyConnect(): Promise<EIP6963ProviderDetail | null> {
  const { walletProviders, setWalletAddress, setWalletProvider } = useStore.getState()
  if (walletProviders == null || !walletProviders.length) {
    return null
  }
  const detail = walletProviders[0]
  const _chainId = await getChainId(detail.provider)
  if (_chainId == chainId) {
    const accounts = await getAccounts(detail.provider)
    if (accounts?.length) {
      setWalletProvider(detail)
      setWalletAddress(accounts[0])
      return detail
    }
  }
  return null
}