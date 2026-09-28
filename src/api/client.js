import axios from 'axios'

// Central axios instance. Point VITE_API_BASE_URL at your backend in a .env file:
// VITE_API_BASE_URL=https://api.yourbank.com
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('bankdash_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling hook — wire up a toast/notification system here.
    console.error('API error:', error?.response?.data || error.message)
    return Promise.reject(error)
  }
)

// Example endpoints — swap these for your real backend routes.
// These currently have no live server behind them; pages fall back to
// the local mock data in src/data/mockData.js when calls fail.
export const endpoints = {
  getDashboard: () => api.get('/dashboard'),
  getTransactions: (page = 1) => api.get(`/transactions?page=${page}`),
  getAccounts: () => api.get('/accounts'),
  getInvestments: () => api.get('/investments'),
  getCreditCards: () => api.get('/credit-cards'),
  getLoans: () => api.get('/loans'),
  getServices: () => api.get('/services'),
  updateProfile: (data) => api.put('/profile', data),
}

export default api
