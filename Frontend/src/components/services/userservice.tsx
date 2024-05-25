// Import from the env
<<<<<<< HEAD
const api_url = `http://44.219.138.130:8000`;

// A function to send post request to create a new User
const createUser = async (formData, loggedInUserToken: string) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": loggedInUserToken,
        },
        body: JSON.stringify(formData),
    };
    console.log(requestOptions);
    const response = await fetch(`${api_url}/api/signup`, requestOptions);
    return response;
};
=======
const api_url = `https://ec2-44-219-138-130.compute-1.amazonaws.com:8000`;

// A function to send post request to create a new User
const createUser = async (formData, loggedInUserToken:string) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInUserToken
    },
    body: JSON.stringify(formData)
  };
  console.log(requestOptions);
  const response = await fetch(`${api_url}/api/signup`, requestOptions);
  return response;
}
>>>>>>> a4dabc894dffb76e8fc61fe314c7543ba31c3663

// A function to send get request to get all Users
const getAllUsers = async (token) => {
    // console.log(token);
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
        },
    };
    const response = await fetch(`${api_url}/api/Users`, requestOptions);
    return response;
};

// Export all the functions
const UserService = {
<<<<<<< HEAD
    createUser,
    getAllUsers,
};
=======
  createUser,
  getAllUsers
}
>>>>>>> a4dabc894dffb76e8fc61fe314c7543ba31c3663
export default UserService;
