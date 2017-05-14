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

export function dedupe(array) {
  const tempMap = {};
  let result = [];

  array.forEach(item => {
    let key;
    if (typeof item === 'object' && item !== null) {
      key = JSON.stringify(key);
    } else {
      key = item;
    }

    if (!tempMap[key]) {
      result.push(item);
      tempMap[key] = 1;
    }
  });

  return result;
}

export function makeEnum(keys = []) {
  let keyMap = {};

  const add = key => {
    if (!keyMap[key]) {
      keyMap[key] = key;
    } else {
      throw new Error(`Key ${key} already exists`);
    }
  };

  const get = key => {
    if (keyMap[key]) {
      return keyMap[key];
    } else {
      throw new Error(`Unknown key: ${key}`);
    }
  };

  keys.forEach(add);
  return {add, get};
}

export function isObject(any) {
  return typeof any === 'object' && any !== null;
}