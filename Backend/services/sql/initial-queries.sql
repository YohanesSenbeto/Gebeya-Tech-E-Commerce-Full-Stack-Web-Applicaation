-- Create the users table
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `fullName` VARCHAR(255) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(255),
  `phone` VARCHAR(255),
  `active_user` INT NOT NULL,
  `created_at` DATETIME,
  INDEX (`email`)
) ENGINE=InnoDB;

-- user_roles table
CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_role_id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT,
  `user_role_name` VARCHAR(255) NOT NULL,
  `created_at` DATETIME,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB;


-- Add order
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT,
  `created_at` DATETIME,
  `total_amount` DECIMAL(10, 2),
  `status` ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
  PRIMARY KEY (order_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
) ENGINE=InnoDB;



-- Add order_status
CREATE TABLE IF NOT EXISTS `order_status` (
  `order_status_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `order_status` int(11) NOT NULL,
  PRIMARY KEY (order_status_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
) ENGINE=InnoDB;

--order items

CREATE TABLE order_items (
  `order_item_id` INT PRIMARY KEY AUTO_INCREMENT,
  `order_id` INT,
  `product_id` INT,
  `quantity` INT CHECK (quantity > 0),
  `price` DECIMAL(10, 2),
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
)ENGINE=InnoDB;

--products
CREATE TABLE products (
  `product_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_name` VARCHAR(255),
  `description` TEXT,
  `price` DECIMAL(10, 2) CHECK (price >= 0),
  `stock` INT CHECK (stock >= 0)
)ENGINE=InnoDB;


-- Add the roles to the database 
INSERT INTO user_roles (user_role_name)
VALUES ('user'), ('Admin');

-- This is the admin account Password is 123456
INSERT INTO users (user_id, fullName, username, email,phone, password,gender,active_user,created_at)
VALUES (1, 'Admin', 'Admin', 'admin@admin.com','555-555-5555','$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi','male', 1,CURRENT_TIMESTAMP); 

INSERT INTO user_role (user_id, user_role_id)
VALUES (1, 2); 
