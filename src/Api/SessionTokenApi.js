import axios from 'axios';

const apiBaseUrl = 'http://localhost:2001';

const addLoginHandler = async (username, password) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/login`, {
      username,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw new Error('Login failed');
    }

    const token = 'Behavior Token';
    return token;
  } catch (error) {
    console.error('Login error:', error.message);
  }
};


const addLogoutHandler = async () => {
    try {
      const response = await fetch('http://localhost:2001/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      const responseData = await response.json();
  
      return responseData;
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

const getSessionTokenById = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/getUserId`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Unable to fetch user id from session token.');
    }

    return response.data.userId; 
  } catch (error) {
    console.error('Session token error: ', error.message);
  }
};
  
  export { addLoginHandler, getSessionTokenById, addLogoutHandler };