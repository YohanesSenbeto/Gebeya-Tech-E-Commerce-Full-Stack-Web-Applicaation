// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the login controller
const signupController = require("../controllers/signup.controller");
// // Create a route to handle the login request on post
// router.post("/api/wanipretrive", wanIpController.retrieveData);
// router.post("/api/addWanIp", wanIpController.addWanIp);
router.post("/api/signup", signupController.signup);
// Export the router
module.exports = router;
