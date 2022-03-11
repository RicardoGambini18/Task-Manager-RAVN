// Extending window interface
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    opera: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MSStream: any
  }
}

// function to recognize iOS devices
const isIOS = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true
  }
  return false
}

export default isIOS
