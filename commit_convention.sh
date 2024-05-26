#!/bin/bash

# Stage and commit modified files
git add Backend/controllers/login.controller.js
git commit -m "ℹ️ Stage and commit: Modified login controller"
git push

git add Backend/controllers/user.controller.js
git commit -m "ℹ️ Stage and commit: Modified user controller"
git push

git add Backend/routes/index.js
git commit -m "ℹ️ Stage and commit: Modified index route"
git push

git add Backend/services/login.service.js
git commit -m "ℹ️ Stage and commit: Modified login service"
git push

git add Backend/services/sql/initial-queries.sql
git commit -m "ℹ️ Stage and commit: Modified initial SQL queries"
git push

git add Backend/services/user.service.js
git commit -m "ℹ️ Stage and commit: Modified user service"
git push

git add Frontend/.eslintrc.cjs
git commit -m "ℹ️ Stage and commit: Modified ESLint configuration"
git push

git add Frontend/src/App.tsx
git commit -m "ℹ️ Stage and commit: Modified App component"
git push

git add Frontend/src/components/Login.tsx
git commit -m "ℹ️ Stage and commit: Modified Login component"
git push

git add Frontend/src/components/Navbar.tsx
git commit -m "ℹ️ Stage and commit: Modified Navbar component"
git push

git add Frontend/src/components/Products/product/Eypro.tsx
git commit -m "ℹ️ Stage and commit: Modified Eypro product component"
git push

git add Frontend/src/components/Products/product/Product.tsx
git commit -m "ℹ️ Stage and commit: Modified Product component"
git push

git add Frontend/tsconfig.json
git commit -m "ℹ️ Stage and commit: Modified TypeScript configuration"
git push

git add Frontend/tsconfig.node.json
git commit -m "ℹ️ Stage and commit: Modified Node TypeScript configuration"
git push

git add README.md
git commit -m "ℹ️ Stage and commit: Modified README"
git push

# Delete files
git rm Backend/controllers/signup.controller.js
git commit -m "✂️ Delete: Removed signup controller"
git push

# Stage and commit untracked files
git add Backend/controllers/Product.Controller.js
git commit -m "✨ Stage and commit: Add Product controller"
git push

git add Backend/controllers/cart.controller.js
git commit -m "✨ Stage and commit: Add Cart controller"
git push

git add Backend/routes/product.Routes.js
git commit -m "✨ Stage and commit: Add Product routes"
git push

git add Backend/services/Product.Service.js
git commit -m "✨ Stage and commit: Add Product service"
git push

git add Frontend/src/components/AddProduct.tsx
git commit -m "✨ Stage and commit: Add AddProduct component"
git push

git add commit_convention.sh
git commit -m "✨ Stage and commit: Add commit convention script"
git push

git add node_modules
git commit -m "✨ Stage and commit: Add node_modules directory"
git push

git add package-lock.json
git commit -m "✨ Stage and commit: Add package-lock.json"
git push

git add package.json
git commit -m "✨ Stage and commit: Add package.json"
git push
