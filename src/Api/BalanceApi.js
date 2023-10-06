import axios from 'axios';

const BASE_URL = 'http://localhost:2001/balance';

const BalanceApi = (route) => {
  const url = `${BASE_URL}/${route}`;

  const get = async () => {
    try {
      const response = await axios.get(url, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const post = async (data) => {
    try {
      const response = await axios.post(url, data, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    get,
    post,
  };
};

export default BalanceApi;
