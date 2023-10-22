export const loginUser = async (data: {
  username: string;
  staffno: string;
  password: string;
}) => {
  try {
    // console.log("hi1");
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

    // console.log("hi2");

    const result = await response.json();
    console.log("check login result", result);
    // alert("login Success");
      if (result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("adminId", result.adminId);
          return {token:result.token, adminId:result.adminId};
      }

  } catch (e) {
    console.log("check error", e);
    // throw new Error("Server responded with an error");
    return false;
  }
};

