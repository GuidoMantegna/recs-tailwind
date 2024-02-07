const API_VERSION = 'v1'
const BASE_URL =
  window.location.hostname === 'localhost'
    ? `http://localhost:1234/api/${API_VERSION}`
    : `https://recs-api.vercel.app/api/${API_VERSION}`

const STATIC_BASE_URL =
  window.location.hostname === 'localhost'
    ? `http://localhost:1234`
    : `https://recs-api.vercel.app`

export { API_VERSION, BASE_URL, STATIC_BASE_URL }
