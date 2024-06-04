# Gebeya-Tech-E-Commerce-Full-Stack-Web-Applicaation

-   Setup Instructions:

# Frontend Installation:

-   Clone the Frontend Repository

-   git clone https://github.com/YohanesSenbeto/Gebeya-Tech-E-Commerce-Full-Stack-Web-Application.git

# Navigate to the Frontend Directory

-   cd frontend

# Install Frontend Dependencies

-   npm install

# Start the Frontend Development Server

-   npm run dev

# Backend Installation:

# Clone the Backend Repository

-   git clone https://github.com/YohanesSenbeto/Gebeya-Tech-E-Commerce-Full-Stack-Web-Application.git

# Navigate to the Backend Directory

-   cd backend

# Install Backend Dependencies

-   npm install

# Start the Backend Server

-   npm start

# Key Achievements:

-   User authentication and authorization

-   CRUD operations for products and users

-   Responsive design and user-friendly interface

-   Comprehensive API documentation with examples

-   integrated with stripe payment gateway

# Usage Guidelines:

-   Register or log in to your account.

-   Browse the list of Gebeya-Tech-products.

-   Add a new New products and sale.

# Development Process:

-   Initial planning and wireframing

-   Setting up the project repository

-   Developing the back-end API

-   Creating the front-end components and integrating with the API

-   Conducting user testing and feedback sessions

-   Finalizing and styling the application

# GitHub Repository Structure:

-   Gebeya-Tech-E-Commerce-Full-Stack-Web-Application\Frontend


<p>
├── node_modules/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Admin/
│ │ │ ├── AddProductsForm/
│ │ │ ├── AdminMenu/
│ │ │ └── UsersList/
│ │ ├── Auth/
│ │ │ └── PrivateAuthRoute.tsx
│ │ ├── Contexts/
│ │ ├── gebeyacart/
│ │ │ ├── App/
│ │ │ ├── features/
│ │ │ ├── Cart.tsx
│ │ │ ├── CartDropdown.tsx
│ │ │ ├── Checkout.tsx
│ │ │ ├── CheckoutForm.tsx
│ │ │ ├── CheckoutSuccess.tsx
│ │ │ ├── Nav.tsx
│ │ │ ├── PayButton.tsx
│ │ │ ├── ProductList.tsx
│ │ │ ├── stripe.tsx
│ │ │ └── ToastNotification.tsx
│ │ ├── Pages/
│ │ │ ├── admin/
│ │ │ ├── 404.tsx
│ │ │ └── Unauthorized.tsx
│ │ ├── services/
│ │ │ ├── Contexts/
│ │ │ ├── BackendPro.tsx
│ │ │ ├── imageService.tsx
│ │ │ ├── loginservice.tsx
│ │ │ ├── productService.tsx
│ │ │ ├── signupService.tsx
│ │ │ └── userservice.tsx
│ │ ├── ui/
│ │ ├── util/
│ │ ├── about.tsx
│ │ ├── Banner.tsx
│ │ ├── CircularNavigation.tsx
│ │ ├── contact.tsx
│ │ ├── Footer.tsx
│ │ ├── Home.tsx
│ │ ├── ImageList.tsx
│ │ ├── ImageUpload.tsx
│ │ ├── ImageUploader.tsx
│ │ ├── Login.tsx
│ │ ├── mockData.tsx
│ │ ├── Navbar.tsx
│ │ ├── ProductCard.css
│ │ ├── ProductCard.tsx
│ │ ├── ProductLists.tsx
│ │ ├── ProductSearchResults.tsx
│ │ ├── profile.tsx
│ │ ├── responsive.tsx
│ │ ├── searchbar.tsx
│ │ ├── SearchContext.tsx
│ │ ├── SearchResults.tsx
│ │ ├── Signup.tsx
│ │ ├── lib/
│ │ ├── App.tsx
│ │ ├── BirthdayExplosion.tsx
│ │ ├── index.css
│ │ ├── main.tsx
│ │ └── start.tsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── advanced guide.txt
├── CHANGELOG.md
├── commitlint.config.js
├── components.json
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
</p>

# Gebeya-Tech-E-Commerce-Full-Stack-Web-Application\Backend

<p>
├── .vscode/
├── config/
│ ├── db.config.js
│ └── multer.config.js
├── controllers/
│ ├── cart.controller.js
│ ├── image.controller.js
│ ├── install.controller.js
│ ├── login.controller.js
│ ├── order.controller.js
│ ├── Product.Controller.js
│ ├── stripe.controller.js
│ └── user.controller.js
├── middlewares/
│ └── auth.middleware.js
├── models/
│ ├── imageModel.js
│ └── Order.js
├── node_modules/
├── routes/
│ ├── image.routes.js
│ ├── index.js
│ ├── install.routes.js
│ ├── login.routes.js
│ ├── order.routes.js
│ ├── product.routes.js
│ ├── signup.routes.js
│ ├── stripe.routes.js
│ └── users.route.js
├── services/
│ ├── sql/
│ ├── image.service.js
│ ├── install.service.js
│ ├── login.service.js
│ ├── order.service.js
│ ├── Product.Service.js
│ ├── stripe.service.js
│ └── user.service.js
├── uploads/
├── .env
├── .env.production
├── .gitignore
├── app.js
├── db.txt
├── mongoConnection.js
├── package-lock.json
├── package.json
└── stripe.tsx
</p>
<h3> Explanation </h3>

-   config/: Contains configuration files.

-   db.config.js: Configuration for the database connection.

-   multer.config.js: Configuration for Multer, a middleware for handling multipart/form-data, used for uploading files.

-   controllers/: Contains controller files that handle the logic for various parts of the application.

-   cart.controller.js: Manages shopping cart operations.

-   image.controller.js: Manages image-related operations.

-   install.controller.js: Handles initial setup or installation operations.

-   login.controller.js: Manages login operations.

-   order.controller.js: Manages order-related operations.

-   Product.Controller.js: Manages product-related operations.

-   stripe.controller.js: Manages Stripe payment operations.

-   user.controller.js: Manages user-related operations.

-   middlewares/: Contains middleware functions executed during the request-response cycle.

-   auth.middleware.js: Middleware for authentication.

-   models/: Contains database models or schemas.

-   imageModel.js: Schema for images.

-   Order.js: Schema for orders.

-   node_modules/: Directory where npm packages are installed (auto-generated by npm install).

-   routes/: Contains route definitions that map to controllers.

-   image.routes.js: Routes for image operations.

-   index.js: Main router file that consolidates all routes.

-   install.routes.js: Routes for installation operations.

-   login.routes.js: Routes for login operations.

-   order.routes.js: Routes for order operations.

-   product.routes.js: Routes for product operations.

-   signup.routes.js: Routes for user signup operations.

-   stripe.routes.js: Routes for Stripe payment operations.

-   users.route.js: Routes for user-related operations.

-   services/: Contains service files that handle business logic and interactions with the database.

-   sql/: Subdirectory for SQL-related services.

-   image.service.js: Service logic for image operations.

-   install.service.js: Service logic for installation operations.

-   login.service.js: Service logic for login operations.

-   order.service.js: Service logic for order operations.

-   Product.Service.js: Service logic for product operations.

-   stripe.service.js: Service logic for Stripe payment operations.

-   user.service.js: Service logic for user operations.
-   uploads/: Directory for storing uploaded files.

-   .env: Environment variables configuration file.

-   .env.production: Environment variables configuration file for the production environment.

-   .gitignore: Specifies which files and directories to ignore in version control.

-   app.js: The main entry point of the backend application.

-   db.txt: Potentially a database-related file (could be a dump or configuration).

-   mongoConnection.js: Configuration and connection setup for MongoDB.

-   package-lock.json: Automatically generated file for locking the dependency versions.

-   package.json: Contains metadata about the project and its dependencies.

-   stripe.tsx: Uncommon to see .tsx in the backend, might be related to handling Stripe with TypeScript.
 ![screencapture-localhost-5173-productList-2024-06-04-18_04_30](https://github.com/YohanesSenbeto/Gebeya-Tech-E-Commerce-Full-Stack-Web-Application/assets/121575345/b6e83c66-fe8b-4664-a7b6-5b501fd87697)

