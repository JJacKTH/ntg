function apiGet(action, params = {}) {
  const query = new URLSearchParams({ action, ...params });
  return fetch(`${APP_SCRIPT_URL}?${query}`)
    .then(res => res.json());
}

