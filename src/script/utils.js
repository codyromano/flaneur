// TODO: Proper redirect using react router
export function routerRedirect(uri) {
  if (uri === '/') {
    window.location.href = '/';
  } else {
    window.location.href = `#/${uri}`;
  }
}

export function adjustFontSizeForInt(n, units = 'rem',
  minSize = 1, maxSize = 3) {
  const digits = n.toString().length;
  const size = Math.max(minSize, maxSize - (digits * 0.5));
  return `${size}${units}`;
}

export function bindToRange(n, min, max) {
  n = Math.min(max, n);
  n = Math.max(min, n);
  return n;
}

export function average(numbers) {
  const sum = numbers.reduce((total, n) => total + n, 0);
  return numbers.length ? sum / numbers.length : null;
}