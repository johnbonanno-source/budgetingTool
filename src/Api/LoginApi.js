const addLoginHandler = async (username, password) => {
  try {
    const response = await fetch('http://localhost:2001/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const responseData = await response.json();
    console.log(responseData);
    const token = "Behavior Token";
    return token;
  } catch (error) {
    console.error('Login error:', error.message);
  }
 
};

export default addLoginHandler;
