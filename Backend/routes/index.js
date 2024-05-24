// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");

// Import the login routes
const loginRoutes = require("./login.routes");
const orderRoutes = require("./order.routes");

const signupRoutes = require("./signup.routes");



router.use(signupRoutes);
// Add the install router to the main router
router.use(installRouter);

// Add the login routes to the main router
router.use(loginRoutes);

router.use(orderRoutes);

// Export the router
module.exports = router;
