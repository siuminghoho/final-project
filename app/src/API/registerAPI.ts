interface Register {
  username: string;
  staffno: string;
  password: string;
}

export const RegisterAPI = async (data: Register) => {
  try {
    console.log("hi1");
    const response = await fetch(
      //  `http://192.168.160.81:8080/adminRegister`,
       `${process.env.REACT_APP_API_SERVER}/adminRegister`,
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
    console.log("check register result", result);
    // alert("Register Success");
    return true;
  } catch (e) {
    console.log("check error", e);
    // throw new Error("Server responded with an error");
    return false;
  }
};
