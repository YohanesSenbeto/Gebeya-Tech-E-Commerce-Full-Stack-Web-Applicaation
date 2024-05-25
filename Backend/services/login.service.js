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
        if (user.length === 0) {
            returnData = {
                status: "fail",
                message: "user does not exist",
            };
            return returnData;
        }
        const passwordMatch = await bcrypt.compare(
            userData.password,
            user.password
        );
        if (!passwordMatch) {
            returnData = {
                status: "fail",
                message: "Incorrect password",
            };
            return returnData;
        }

        console.log(user);
        returnData = {
            status: "success",
            data: user,
        };
        console.log(returnData);
        return returnData;
    } catch (error) {
        console.log(error);
    }
}

// Export the function
module.exports = {
    logIn,
};
