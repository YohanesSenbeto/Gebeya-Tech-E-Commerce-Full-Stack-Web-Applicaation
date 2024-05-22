// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the sign-up controller
const signUpControllers = require("../controllers/signup.controller");

// Route for normal, admin, manager, and staff users
router.post("/api/signup", signUpControllers.signup);

// Export the router
module.exports = router;
