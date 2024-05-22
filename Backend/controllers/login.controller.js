// Import the login service
const LoginService = require("../services/login.service");
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRET;

// Handle user login
async function logIn(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userType = req.body.userType;

        let loggedInUser;

        if (
            userType === "normal" ||
            ["admin", "manager", "staff"].includes(userType)
        ) {
            loggedInUser = await LoginService.login(email, password);
        } else {
            return res.status(400).json({
                status: "fail",
                message: "Invalid user type",
            });
        }

        // If the user is not found or password is incorrect
        if (!loggedInUser) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid credentials",
            });
        }

        // If successful, send a response to the client
        const payload = {
            user_id: loggedInUser.user_id,
            email: loggedInUser.email,
            fullname: loggedInUser.fullname,
        };

        const token = jwt.sign(payload, jwtSecret, {
            expiresIn: "24h",
        });

        res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            token: token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred during login",
        });
    }
}

// Export the function
module.exports = {
    logIn,
};
