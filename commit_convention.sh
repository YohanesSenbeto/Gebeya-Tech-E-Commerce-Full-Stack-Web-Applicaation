#!/bin/bash

# Stage and commit modified files
git add Backend/config/db.config.js
git commit -m "ℹ️ Stage and commit: Modified db config"
git push

git add Backend/controllers/Product.Controller.js
git commit -m "ℹ️ Stage and commit: Modified Product controller"
git push

git add Backend/controllers/cart.controller.js
git commit -m "ℹ️ Stage and commit: Modified cart controller"
git push

git add Backend/controllers/login.controller.js
git commit -m "ℹ️ Stage and commit: Modified login controller"
git push

git add Backend/controllers/order.controller.js
git commit -m "ℹ️ Stage and commit: Modified order controller"
git push

git add Backend/controllers/user.controller.js
git commit -m "ℹ️ Stage and commit: Modified user controller"
git push

git add Backend/middlewares/auth.middleware.js
git commit -m "ℹ️ Stage and commit: Modified auth middleware"
git push

git add Backend/routes/index.js
git commit -m "ℹ️ Stage and commit: Modified index route"
git push

git add Backend/routes/install.routes.js
git commit -m "ℹ️ Stage and commit: Modified install routes"
git push

git add Backend/routes/login.routes.js
git commit -m "ℹ️ Stage and commit: Modified login routes"
git push

git rm Backend/routes/product.Routes.js
git commit -m "✂️ Delete: Removed product routes"
git push

git add Backend/routes/signup.routes.js
git commit -m "ℹ️ Stage and commit: Modified signup routes"
git push

git add Frontend/src/App.tsx
git commit -m "ℹ️ Stage and commit: Modified App component"
git push

git add Frontend/src/components/Banner.tsx
git commit -m "ℹ️ Stage and commit: Modified Banner component"
git push

git add Frontend/src/components/Cart/CartItem/CartItem.tsx
git commit -m "ℹ️ Stage and commit: Modified CartItem component"
git push

git add Frontend/src/components/Cart/cart.tsx
git commit -m "ℹ️ Stage and commit: Modified Cart component"
git push

git add Frontend/src/components/Contexts/AuthContext.tsx
git commit -m "ℹ️ Stage and commit: Modified AuthContext component"
git push

git add Frontend/src/components/Home.tsx
git commit -m "ℹ️ Stage and commit: Modified Home component"
git push

git add Frontend/src/components/Login.tsx
git commit -m "ℹ️ Stage and commit: Modified Login component"
git push

git add Frontend/src/components/Navbar.tsx
git commit -m "ℹ️ Stage and commit: Modified Navbar component"
git push

git add Frontend/src/components/ProductCard.tsx
git commit -m "ℹ️ Stage and commit: Modified ProductCard component"
git push

git add Frontend/src/components/ProductList.tsx
git commit -m "ℹ️ Stage and commit: Modified ProductList component"
git push

git add Frontend/src/components/Products/product/Eypro.tsx
git commit -m "ℹ️ Stage and commit: Modified Eypro product component"
git push

git add Frontend/src/components/Products/product/Product.tsx
git commit -m "ℹ️ Stage and commit: Modified Product component"
git push

git add Frontend/src/components/Products/product/Products.tsx
git commit -m "ℹ️ Stage and commit: Modified Products component"
git push

git add Frontend/src/components/Products/product/card.tsx
git commit -m "ℹ️ Stage and commit: Modified product card"
git push

git add Frontend/src/components/Signup.tsx
git commit -m "ℹ️ Stage and commit: Modified Signup component"
git push

git add Frontend/src/components/about.tsx
git commit -m "ℹ️ Stage and commit: Modified About component"
git push

git add Frontend/src/components/contact.tsx
git commit -m "ℹ️ Stage and commit: Modified Contact component"
git push

git add Frontend/src/components/profile.tsx
git commit -m "ℹ️ Stage and commit: Modified Profile component"
git push

git add Frontend/src/components/services/loginservice.tsx
git commit -m "ℹ️ Stage and commit: Modified login service"
git push

git add Frontend/src/components/services/signupService.tsx
git commit -m "ℹ️ Stage and commit: Modified signup service"
git push

git add Frontend/src/components/services/userservice.tsx
git commit -m "ℹ️ Stage and commit: Modified user service"
git push

git add Frontend/src/components/ui/avatar.tsx
git commit -m "ℹ️ Stage and commit: Modified avatar component"
git push

git add Frontend/src/components/ui/badge.tsx
git commit -m "ℹ️ Stage and commit: Modified badge component"
git push

git add Frontend/src/components/ui/button.tsx
git commit -m "ℹ️ Stage and commit: Modified button component"
git push

git add Frontend/src/components/ui/card.tsx
git commit -m "ℹ️ Stage and commit: Modified card component"
git push

git add Frontend/src/components/ui/checkbox.tsx
git commit -m "ℹ️ Stage and commit: Modified checkbox component"
git push

git add Frontend/src/components/ui/drawer.tsx
git commit -m "ℹ️ Stage and commit: Modified drawer component"
git push

git add Frontend/src/components/ui/dropdown-menu.tsx
git commit -m "ℹ️ Stage and commit: Modified dropdown menu component"
git push

git add Frontend/src/components/ui/input.tsx
git commit -m "ℹ️ Stage and commit: Modified input component"
git push

git add Frontend/src/components/ui/label.tsx
git commit -m "ℹ️ Stage and commit: Modified label component"
git push

git add Frontend/src/components/ui/select.tsx
git commit -m "ℹ️ Stage and commit: Modified select component"
git push

git add Frontend/src/components/ui/textarea.tsx
git commit -m "ℹ️ Stage and commit: Modified textarea component"
git push

git add Frontend/src/index.js
git commit -m "ℹ️ Stage and commit: Modified index file"
git push

git add Frontend/src/main.tsx
git commit -m "ℹ️ Stage and commit: Modified main file"
git push

git add Frontend/vite.config.ts
git commit -m "ℹ️ Stage and commit: Modified Vite config"
git push

git add README.md
git commit -m "ℹ️ Stage and commit: Modified README"
git push

git add commit_convention.sh
git commit -m "ℹ️ Stage and commit: Modified commit convention script"
git push

# Stage and commit untracked files
git add Backend/routes/productRoutes.js
git commit -m "✨ Stage and commit: Add product routes"
git push
