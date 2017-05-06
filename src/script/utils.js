// TODO: Proper redirect using react router
export function routerRedirect(uri) {
  if (uri === '/') {
    window.location.href = '/';
  } else {
    window.location.href = `#/${uri}`;
  }
}