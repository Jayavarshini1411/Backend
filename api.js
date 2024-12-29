import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        ...params,
        apiKey: process.env.REACT_APP_NEWS_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
