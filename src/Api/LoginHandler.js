const addLoginHandler = async (username, password) => {
  return true;
  // const response = await fetch(
  //   `http://localhost:2000/login`,
  //   {
  //     method: "POST",
  //     body:{
  //         username : `${username}`,
  //         password : `${password}`
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  // const responseData = await response.json();
  // const retrievedUsername = responseData.user.username;
  // const retrievedPassword = responseData.user.password;

  // if (retrievedUsername === username && retrievedPassword === password) {
  //   return true;
  // }
  // else{
  //   return true;
  // }
};

export default addLoginHandler;
