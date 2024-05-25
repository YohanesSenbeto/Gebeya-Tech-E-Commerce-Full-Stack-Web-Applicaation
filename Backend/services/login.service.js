// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// Import the bcrypt module to do the password comparison
const bcrypt = require("bcryptjs");
// Import the user service to get user by email
const userService = require("./user.service");

// Handle user login
async function logIn(userData) {
    try {
        let returnData = {}; // Object to be returned
        const user = await userService.getUserByEmail(userData.email);

        // Check if user exists
        if (!user) {
            return {
                status: "fail",
                message: "User does not exist",
            };
        }

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(
            userData.password,
            user.password
        );
        console.log(passwordMatch);
        console.log(userData.password);
        console.log(user.password);

        // Check if the password matches
        if (!passwordMatch) {
            return {
                status: "fail",
                message: "Incorrect password",
            };
        }

        // Return success if user is authenticated
        return {
            status: "success",
            data: user,
        };
    } catch (error) {
        console.error(error);
        return {
            status: "error",
            message: "An error occurred during login",
        };
    }
}

// Export the function
module.exports = {
    logIn,
};
