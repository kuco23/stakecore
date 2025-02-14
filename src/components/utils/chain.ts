import { useGlobalStore } from "../../utlits/store/global"
import { requestAccounts, switchNetworkIfNecessary } from "../../utlits/eip6963/eip1193"
import { delegate as _delegate } from "../../utlits/eip6963/contracts"


export async function delegate(): Promise<void> {
  let { walletProvider, setWalletVisible } = useGlobalStore.getState()
  if (walletProvider == null) {
    return setWalletVisible(true)
  }
  if (!await switchNetworkIfNecessary(walletProvider.provider)) return
  const { walletAddress, setWalletAddress } = useGlobalStore.getState()
  if (walletAddress == null) {
    const addresses = await requestAccounts(walletProvider.provider)
    if (!addresses.length) return
    setWalletAddress(addresses[0])
  }
  return _delegate(walletProvider.provider)
}