import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Contact from "./components/contact";
import About from "./components/about";
import Profile from "./components/profile";
import Eypro from "./components/Products/product/Eypro";
import AddProduct from "./components/AddProduct";

import { AuthProvider } from "./components/Contexts/AuthContext";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <AuthProvider>
                <Provider store={store}>
                    <Navbar
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                    />
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/Login"
                            element={<Login setIsLoggedIn={setIsLoggedIn} />}
                        />

                        <Route path="/ProductList" element={<ProductList />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/Eypro" element={<Eypro />} />
                        <Route path="/AddProduct" element={<AddProduct />} />

                        {/* other routes go here */}
                    </Routes>
                </Provider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
