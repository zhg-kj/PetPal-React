import axios from 'axios';

export const register = async (user) => {
  try {
    await axios.post(process.env.REACT_APP_API_URL + '/account/register/', user);
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