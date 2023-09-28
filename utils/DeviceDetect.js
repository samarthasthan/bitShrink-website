function isAppleDevice() {
  const userAgent = navigator.userAgent;
  return /iPad|iPhone|iPod|Mac|Apple Watch/.test(userAgent);
}

export default isAppleDevice;
