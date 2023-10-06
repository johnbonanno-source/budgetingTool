import axios from 'axios';

const BASE_URL = 'http://localhost:2001/expenses';

const ExpensesApi = (route) => {
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

  const put = async (data) => {
    try {
      const response = await axios.put(url, data, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  return {
    get,
    post,
    put,
  };
};

export default ExpensesApi;
