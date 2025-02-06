export const connectWallet = () => {
  const event = new CustomEvent('connect-wallet')
  window.dispatchEvent(event)
}