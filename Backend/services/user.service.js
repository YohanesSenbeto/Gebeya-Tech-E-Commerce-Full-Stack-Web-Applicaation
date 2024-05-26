// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// Import the bcrypt module
const bcrypt = require("bcryptjs");

// A function to check if User exists in the database
async function checkIfUserExists(email) {
    const query = "SELECT * FROM users WHERE email = ?";
    const [rows] = await conn.query(query, [email]);

    console.log(rows);
    return rows.length > 0;
}

// A function to create a new User
async function createUser(UserData) {
    let createdUser = {};
    try {
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        // Hash the password
        const hashedPassword = await bcrypt.hash(UserData.password, salt);

        console.log(hashedPassword);

        let user_role_name;

        if (UserData.user_role_id === 1) {
            user_role_name = "customer";
        } else {
            user_role_name = "admin";
        }

        // Insert the remaining data into the User_info, User_pass, and User_role tables
        const query1 = `
            INSERT INTO users (fullName, username, email, password, gender, phone, active_user, created_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const [result1] = await conn.query(query1, [
            UserData.fullName,
            UserData.username,
            UserData.email,
            hashedPassword,
            UserData.gender,
            UserData.phone,
            UserData.active_user,
            new Date(),
        ]);

        const user_id = result1.insertId;

        const query2 = `
            INSERT INTO user_roles (user_id, user_role_name) 
            VALUES (?, ?)
        `;
        const [result2] = await conn.query(query2, [user_id, user_role_name]);

        console.log(user_role_name);

        if (result2.affectedRows !== 1) {
            return false;
        }

        // Construct the User object to return
        createdUser = {
            user_id: user_id,
            email: UserData.email,
            fullName: UserData.fullName,
            username: UserData.username,
            phone: UserData.phone,
            gender: UserData.gender,
            roleName: user_role_name,
        };

        console.log(createdUser);
    } catch (err) {
        console.log(err);
    }
    // Return the User object
    return createdUser;
}

// A function to get User by email
async function getUserByEmail(userEmail) {
    const query = `
      SELECT 
        users.user_id,
        users.password,
        users.fullName,
        users.email,
        users.username,
        users.phone,
        users.gender,
        users.active_user,
        users.created_at,
        user_roles.user_role_id,
        user_roles.user_role_name
      FROM users 
      INNER JOIN user_roles ON users.user_id = user_roles.user_id
      WHERE users.email = ?
  `;

    try {
        const [rows] = await conn.query(query, [userEmail]);

        if (!rows || rows.length === 0) {
            return null; // User not found
        }

        const user = rows[0];
        return user;
    } catch (error) {
        console.error("Database query error:", error);
        throw error; // Re-throw the error after logging it
    }
}

async function getAllUsers() {
    const query = `
      SELECT 
        users.user_id,
        users.fullName,
        users.email,
        users.username,
        users.phone,
        users.gender,
        users.active_user,
        users.created_at,
        user_roles.user_role_id,
        user_roles.user_role_name
      FROM users
      INNER JOIN user_roles ON users.user_id = user_roles.user_id
  `;

    try {
        const [rows] = await conn.query(query);
        return rows;
    } catch (error) {
        console.error("Database query error:", error);
        throw error; // Re-throw the error after logging it
    }
}

// Export the functions for use in the controller
module.exports = {
    checkIfUserExists,
    createUser,
    getUserByEmail,
    getAllUsers,
};
