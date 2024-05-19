# Gebeya-Tech-E-Commerce-Full-Stack-Web-Applicaation

• Setup Instructions:

1. Clone the repository.
2. Install dependencies with npm install.
3. Set up environment variables.
4. Start the development server with npm run dev.

    • Usage Guidelines:

5. Register or log in to your account.
6. Browse the list of Gebeya-Tech-products.
7. Add a new New products and sale.
8. Edit or delete your products.
   • Project Architecture:
   • Client: React components (ProductList, ProductDetails, ProductForm)
   • Server: Express.js routes (/api/products, /api/AddProducts)
   • Database: MongoDB collections for users, products, and admin

    Demonstration
    Development Process:
    • Initial planning and wireframing
    • Setting up the project repository
    • Developing the back-end API
    • Creating the front-end components and integrating with the API
    • Conducting user testing and feedback sessions
    • Finalizing and styling the application

    Key Achievements:
    • User authentication and authorization
    • CRUD operations for products and users
    • Responsive design and user-friendly interface
    • Comprehensive API documentation with examples

GitHub Repository Structure

#Gebeya-Tech-E-Commerce-Full-Stack-Web-Application/
├── Frontend/

    ├── .env
    ├── src/
            ├── App.tsx
            └── index.js
            ├── index.css
            └── main.tsx
        ├── components/
                ├──
                └──
                ├──
                └──
                ├──
                └──
                ├──
                └──

│ │
│ ├── public/
│ └── package.json
├── server/
│ ├── routes/
│ │ ├──
│ │ └──
│ ├── models/
│ │ ├──
│ │ └──
│ ├── server.js
│ ├── .env
│ └── package.json
├── .gitignore
├── README.md
└── package.json


// shadcn intallation doc



Vite
Install and configure Vite.
Create project
Start by creating a new React project using vite:

npm create vite@latest

Add Tailwind and its configuration
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files:

npm install -D tailwindcss postcss autoprefixer
 
npx tailwindcss init -p

Edit tsconfig.json file
Add the following code to the tsconfig.json file to resolve paths:

{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}

Update vite.config.ts
Add the following code to the vite.config.ts so your app can resolve paths without error

# (so you can import "path" without error)
npm i -D @types/node

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

Run the CLI
Run the shadcn-ui init command to setup your project:

npx shadcn-ui@latest init

Configure components.json
You will be asked a few questions to configure components.json:

Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes (no)

That's it
You can now start adding components to your project.

npx shadcn-ui@latest add button

The command above will add the Button component to your project. You can then import it like this:

import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}