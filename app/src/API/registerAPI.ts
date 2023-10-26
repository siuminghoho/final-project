interface Register {
  username: string;
  staffno: string;
  password: string;
}

export const RegisterAPI = async (data: Register) => {
  try {
    console.log("Initiating registration process");

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

    //check logic if user input exact the same as the fetched data

    console.log("Received response from server");

    //check if the response is ok

    if (response.ok) {
      const result = await response.json();

      console.log("check register result", result);

      return true;
    } else {
      console.error("Server responded with status: ", response.status);
      const errorDetail = await response.json();

      console.error("Server responded with error: ", errorDetail);
    }
    // alert("Register Success");
  } catch (error) {
    console.log("check error", error);
    // throw new Error("Server responded with an error");
    return false;
  }
};
