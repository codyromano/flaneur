// TODO: Proper redirect using react router
export function routerRedirect(uri) {
  if (uri === '/') {
    window.location.href = '/';
  } else {
    window.location.href = `#/${uri}`;
  }
}

export function adjustFontSizeForInt(n, units, minSize = 0.5, maxSize = 3) {
  const digits = n.toString().length;
  const size = Math.max(minSize, maxSize - (digits * 0.25));
  return `${size}${units}`;
};