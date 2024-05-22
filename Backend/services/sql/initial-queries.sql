/workspaces/Gebeya-Tech-E-Commerce-Full-Stack-Web-Application/Backend/routes-- Create the users table
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `fullName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255),
  `gender` VARCHAR(20),
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX (`email`),
  INDEX (`username`)
) ENGINE=InnoDB;

-- Create the categories table
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create the products table
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `price` DECIMAL(10, 2) NOT NULL,
  `stock` INT NOT NULL,
  `category_id` INT,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`)
) ENGINE=InnoDB;

-- Create the product_images table
CREATE TABLE IF NOT EXISTS `product_images` (
  `image_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;

-- Create the addresses table
CREATE TABLE IF NOT EXISTS `addresses` (
  `address_id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `address_line1` VARCHAR(255) NOT NULL,
  `address_line2` VARCHAR(255),
  `city` VARCHAR(100) NOT NULL,
  `state` VARCHAR(100) NOT NULL,
  `postal_code` VARCHAR(20) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB;

-- Create the orders table
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `order_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` VARCHAR(50) NOT NULL,
  `total_amount` DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB;

-- Create the order_items table
CREATE TABLE IF NOT EXISTS `order_items` (
  `order_item_id` INT PRIMARY KEY AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;

-- Create the payments table
CREATE TABLE IF NOT EXISTS `payments` (
  `payment_id` INT PRIMARY KEY AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `amount` DECIMAL(10, 2) NOT NULL,
  `payment_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_method` VARCHAR(50) NOT NULL,
  `status` VARCHAR(50) NOT NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`)
) ENGINE=InnoDB;

-- Create the reviews table
CREATE TABLE IF NOT EXISTS `reviews` (
  `review_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `rating` INT CHECK (rating >= 1 AND rating <= 5),
  `comment` TEXT,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB;

-- Create the wishlists table
CREATE TABLE IF NOT EXISTS `wishlists` (
  `wishlist_id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;

-- Create the shipping_methods table
CREATE TABLE IF NOT EXISTS `shipping_methods` (
  `shipping_method_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `cost` DECIMAL(10, 2) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create the order_shipments table
CREATE TABLE IF NOT EXISTS `order_shipments` (
  `shipment_id` INT PRIMARY KEY AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `shipping_method_id` INT NOT NULL,
  `tracking_number` VARCHAR(255),
  `shipped_date` DATETIME,
  `delivery_date` DATETIME,
  `status` VARCHAR(50) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`),
  FOREIGN KEY (`shipping_method_id`) REFERENCES `shipping_methods`(`shipping_method_id`)
) ENGINE=InnoDB;

-- Create the discounts table
CREATE TABLE IF NOT EXISTS `discounts` (
  `discount_id` INT PRIMARY KEY AUTO_INCREMENT,
  `code` VARCHAR(50) NOT NULL UNIQUE,
  `description` TEXT,
  `discount_percent` DECIMAL(5, 2) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create the product_discounts table
CREATE TABLE IF NOT EXISTS `product_discounts` (
  `product_discount_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `discount_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`),
  FOREIGN KEY (`discount_id`) REFERENCES `discounts`(`discount_id`)
) ENGINE=InnoDB;

-- Create the inventory table
CREATE TABLE IF NOT EXISTS `inventory` (
  `inventory_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `location` VARCHAR(255),
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id
    `) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;


  -- Create the suppliers table
CREATE TABLE IF NOT EXISTS `suppliers` (
  `supplier_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `contact_person` VARCHAR(255),
  `phone` VARCHAR(20),
  `email` VARCHAR(255),
  `address` TEXT,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Create the supplier_products table
CREATE TABLE IF NOT EXISTS `supplier_products` (
  `supplier_product_id` INT PRIMARY KEY AUTO_INCREMENT,
  `supplier_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `cost_price` DECIMAL(10, 2) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`supplier_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;

-- Create the product_details table
CREATE TABLE IF NOT EXISTS `product_details` (
  `detail_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `attribute` VARCHAR(255) NOT NULL,
  `value` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;

-- Create the sub_categories table
CREATE TABLE IF NOT EXISTS `sub_categories` (
  `sub_category_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `category_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`)
) ENGINE=InnoDB;

