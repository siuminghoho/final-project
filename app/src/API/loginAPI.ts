export const LoginAPI = async (data: {
  username: string;
  staffno: string;
  password: string;
}) => {
  try {
    console.log("hi1");
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/adminLogin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    console.log("hi2");

    const result = await response.json();
    console.log("check login result", result);
    alert("login Success");
    return true;
  } catch (e) {
    console.log("check error", e);
    // throw new Error("Server responded with an error");
    return false;
  }
};
