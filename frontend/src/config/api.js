// API Configuration
// VITE_API_URL must be set in Vercel Environment Variables for production
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export { API_BASE_URL };
