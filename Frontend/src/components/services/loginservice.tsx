<<<<<<< HEAD
const api_url = `http://44.219.138.130:8000`;

interface LoginForm {
    email: string;
    password: string;
=======
const api_url = `https://ec2-44-219-138-130.compute-1.amazonaws.com:8000/`;

interface LoginForm {
  email:string;
  password: string;

>>>>>>> a4dabc894dffb76e8fc61fe314c7543ba31c3663
}

// A function to send the login request to the server
const logIn = async (formData: LoginForm): Promise<Response> => {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    };
    console.log("About to send request");
    console.log(requestOptions.body);
    const response = await fetch(`${api_url}/api/login`, requestOptions);

<<<<<<< HEAD
    const data = await response.json();
    console.log(data);
=======
  const data = await response.json();
  console.log(data)

>>>>>>> a4dabc894dffb76e8fc61fe314c7543ba31c3663

    if (data.status === "success") {
        const token = data.data.user_token;
        const user = data.data.user;

        // Store the token and user data (e.g., in localStorage or state management)
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

<<<<<<< HEAD
        console.log("User logged in successfully", user);
    } else {
        console.error("Login failed:", data.message);
    }
    return response;
};
=======
    // Store the token and user data (e.g., in localStorage or state management)
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    console.log('User logged in successfully', user);
  } else {
    console.error('Login failed:', data.message);
  }
  return response;

}
>>>>>>> a4dabc894dffb76e8fc61fe314c7543ba31c3663

// A function to log out the user
const logOut = (): void => {
    localStorage.removeItem("user");
};
<<<<<<< HEAD
export default logOut;
// Export the functions
export { logIn };
=======
export default logOut
// Export the functions
export {
  logIn

}
>>>>>>> a4dabc894dffb76e8fc61fe314c7543ba31c3663
