import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { RiCloseCircleFill } from '@remixicon/react'
import { useStore } from '../../utlits/store/global'
import { useSyncProviders } from '../../utlits/wallet/syncProviders'


export const DiscoverWalletProviders = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const providers = useSyncProviders()

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    const accounts: string[] | undefined =
      await (
        providerWithInfo.provider
          .request({ method: 'eth_requestAccounts' })
          .catch(console.error)
      ) as string[] | undefined;

    if (accounts?.[0]) {
      const { setWalletProvider, setWalletAddress } = useStore.getState()
      setWalletProvider(providerWithInfo)
      setWalletAddress(accounts?.[0])
      setIsVisible(false)
    }
  }

  useEffect(() => {
    const handleConnectWallet = () => setIsVisible(true)
    window.addEventListener('connect-wallet', handleConnectWallet)
    return () => {
      window.removeEventListener('connect-wallet', handleConnectWallet)
    }
  }, [])

  if (!isVisible) return null

  return ReactDOM.createPortal(
    <div className="wallet-container">
      <div className="wallet">
        <h2>Wallets Detected:</h2>
        <div className="provider">
          {
            providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (
              <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >
                <img src={provider.info.icon} alt={provider.info.name} />
                <div>{provider.info.name}</div>
              </button>
            )) :
              <div>
                No Detected Wallet Providers
              </div>
          }
        </div>
        <button onClick={() => setIsVisible(false)} className="close"><i><RiCloseCircleFill size={20} /></i></button>
      </div>
    </div>,
    document.getElementById('connect-wallet') as HTMLElement
  )
}

export default DiscoverWalletProviders