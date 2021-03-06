const API = process.env.REACT_APP_API_URL;

function headers() {

  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}

function parseResponse(response) {
  console.log("PARSED RESPONSE: ", response);
  return response.json().then((json) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  });
}

function queryString(params) {
  const query = Object.keys(params)
                      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
                      .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

export default {
  fetch(url, params = {}) {
    return fetch(`${API}${url}${queryString(params)}`, {
      method: 'GET',
      headers: headers(),
    })
    .then(parseResponse);
  },

  post(url, data) {
    const body = JSON.stringify(data);

    return fetch(`${API}${url}`, {
      method: 'POST',
      headers: headers(),
      body,
    })
    .then(parseResponse);
  },

  patch(url, data) {
    console.log("PATCH CALL MADE", url, data);
    const body = JSON.stringify(data);

    return fetch(`${API}${url}`, {
      method: 'PUT',
      headers: headers(),
      body,
    })
    .then(parseResponse);
  },

  delete(url) {
    return fetch(`${API}${url}`, {
      method: 'DELETE',
      headers: headers(),
    })
  },
};
