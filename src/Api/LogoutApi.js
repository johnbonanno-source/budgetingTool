const addLogoutHandler = async () => {
  try {
    const response = await fetch("http://localhost:2001/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Logout failed");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Login error:", error.message);
  }
};

export default addLogoutHandler;
