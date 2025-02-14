export const formatBalance = (rawBalance: string) => {
  const balance = parseInt(rawBalance) / 1000000000000000000
  return balance.toFixed()
}

export const formatChainAsNum = (chainIdHex: string) => {
  return parseInt(chainIdHex)
}

export const formatAddress = (addr: string, num = 5) => {
  return `${addr.substring(0, 2 + num)}...${addr.substring(addr.length - num)}`
}