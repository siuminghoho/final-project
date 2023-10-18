interface Register {
	username: string
    staffno: string
	password: string
}


export const RegisterAPI = async (data: Register) => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/adminRegister`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Server responded with an error');
    }


    const result = await response.json();
    return result;
};