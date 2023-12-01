const axios = require('axios');

export const login = async (username, password) => {
  try {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/accounts/login/', {
      username: username,
      password: password
    });
    
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
  } catch (error) {
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};