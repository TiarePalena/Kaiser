import axios from 'axios';
import { API_ENDPOINTS, API_TIMEOUT } from './api.config';

const api = axios.create({
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  async sendContact(data: {
    name: string;
    email: string;
    industry: string;
    message: string;
  }) {
    try {
      const response = await api.post(API_ENDPOINTS.CONTACT, data);
      return response.data;
    } catch (error) {
      console.error('Error sending contact:', error);
      throw error;
    }
  },
};

export const quoterService = {
  async generateQuote(projectDetails: any) {
    try {
      const response = await api.post(API_ENDPOINTS.QUOTER, {
        projectDetails,
      });
      return response.data;
    } catch (error) {
      console.error('Error generating quote:', error);
      throw error;
    }
  },
};

export const healthService = {
  async checkHealth() {
    try {
      const response = await api.get(API_ENDPOINTS.HEALTH);
      return response.data;
    } catch (error) {
      console.error('Error checking health:', error);
      throw error;
    }
  },
};
