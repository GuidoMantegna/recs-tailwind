const API_VERSION = 'v1'
const BASE_URL =
  window.location.hostname === 'localhost'
    ? `http://localhost:1234/api/${API_VERSION}`
    : `https://recs-api.vercel.app/api/${API_VERSION}`

export { API_VERSION, BASE_URL }
