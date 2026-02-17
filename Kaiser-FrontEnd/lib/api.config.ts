export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/health`,
  CONTACT: `${API_BASE_URL}/contact`,
  QUOTER: `${API_BASE_URL}/quoter`,
};

export const API_TIMEOUT = 30000; // 30 segundos
