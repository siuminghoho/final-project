
import { useMutation } from '@tanstack/react-query';

interface LoginResponse {
  token: string;
  // ... other fields returned from your API if there are any
}

export function useLogin() {
  return useMutation<LoginResponse, Error, { staffno: string; password: string }>(
    async ({ staffno, password }) => {
      const response = await fetch(`${process.env.REACT_APP_API_SERVER}/adminLogin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ staffno, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    }
  );
}



// import { useQuery } from "@tanstack/react-query";

// interface Login {
// 	staffno: string
// 	password: string
// }

// export function Login(staffno: string, password: string){

//     const {isLoading, error, data, isFetching} = useQuery({
//         queryKey: ["login"],
//         queryFn: async ()=> {
//             const res = await fetch(`${process.env.REACT_APP_API_SERVER}/adminLogin`)
//             const result = await res.json()
//             return result.data as Login[]
//         }
//     })
// }





// export async function LoginAPI(staffno: string, password: string) {
//     try {
//         // Attempt to send a request to the server. This can fail due to network issues, server problems, etc.
//         const res = await fetch(`${process.env.REACT_APP_API_SERVER}/adminLogin`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": 'application/json'
//             },
//             body: JSON.stringify({
//                 staffno,
//                 password
//             })
//         });

//         // Try parsing the response as JSON. This can fail if the response is not valid JSON.
//         const result = await res.json();

//         if (res.status === 200) {
//             // If the login is successful, store the token and indicate success.
//             localStorage.setItem('token', result.token);
//             return true;
//         } else {
//             // If status is not 200, log the error message and indicate failure.
//             console.error("Login failed:", result.message || "Unsuccessful login attempt.");
//             return false;
//         }
//     } catch (error) {
//         // If there was a network error, JSON parsing error, or any other error, it gets caught here.
//         console.error("An error occurred while logging in:", error);
//         return false; // Indicate that the login process failed due to the error.
//     }
// }
