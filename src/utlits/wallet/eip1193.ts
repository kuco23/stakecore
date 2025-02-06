import { chainConfig, chainId } from "../data/constants"

export async function getChainId(
    ethereum: EIP1193Provider
): Promise<string> {
    try {
        const chainId = await ethereum.request({
            "method": "eth_chainId",
            "params": []
        })
        return chainId! as string
    } catch (err: any) {
        return ''
    }
}

export async function getAccounts(
    ethereum: EIP1193Provider
): Promise<string[]> {
    try {
        const accounts = await ethereum.request({
            method: 'eth_accounts',
            params: []
        })
        return accounts as string[]
    } catch (err: any) {
        return []
    }
}

export async function requestAccounts(
    ethereum: EIP1193Provider
): Promise<string[]> {
    try {
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
            params: []
        })
        return accounts as string[]
    } catch (err: any) {
        return []
    }
}

export async function switchNetworkIfNecessary(
    ethereum: EIP1193Provider
): Promise<boolean> {
    if (await getChainId(ethereum) !== chainId) {
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: chainId
                }]
            })
        } catch (err: any) {
            // Chain not added to MetaMask
            if (err.code === 4902) {
                try {
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainConfig,
                            blockExplorerUrls: null
                        }],
                    })
                } catch (err: any) {
                    console.log(err)
                    return false
                }
            } else {
                console.log(err)
                return false
            }
        }
    }
    return true
}