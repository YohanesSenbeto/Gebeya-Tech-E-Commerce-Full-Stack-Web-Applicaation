// signup.service.js
const { query } = require("../config/db.config");
const conn = require("../config/db.config");
const bcrypt = require("bcryptjs");
const userService = require("../services/user.service");

async function signup(req, res) {
    const {
        fullName,
        email,
        username,
        password,
        phone,
        gender
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !username || !password) {
        res.status(400).json({ error: "All fields are required." });
        return;
    }

    try {
        // Call the signup service function
        const result = await userService.signup(
            fullName,
            email,
            username,
            password,
            phone,
            gender
        );

        // Prepare the response object
        const insertedUser = {
            id: result.insertId,
            fullName,
            email,
            username,
            phone,
            gender
        };

        // Send the success response
        res.status(201).json({ status: "success", data: insertedUser });
    } catch (error) {
        console.error("Error signing up:", error);
        // Send the error response
        res.status(500).json({ error: "An error occurred while signing up." });
    }
}

module.exports = {
    signup
};
