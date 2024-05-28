// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import ProductLists from "./components/ProductLists";
import Contact from "./components/contact";
import About from "./components/about";
import Profile from "./components/profile";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { Provider } from "react-redux";
import { useState } from "react";
//gebeyacart import
import store from "./components/gebeyacart/App/store";
import ProductList from "./components/gebeyacart/ProductList";
import Cart from "./components/gebeyacart/Cart";
import Nav from "./components/gebeyacart/Nav";
import Checkout from "./components/gebeyacart/Checkout";
import ToastNotification from "./components/gebeyacart/ToastNotification";
import CheckoutSuccess from "./components/gebeyacart/CheckoutSuccess";

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
                            path="/login"
                            element={<Login setIsLoggedIn={setIsLoggedIn} />}
                        />
                        <Route path="/productLists" element={<ProductLists />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/addProduct" element={<AddProduct />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route
                            path="/checkout-success"
                            element={<CheckoutSuccess />}
                        />
                        <Route
                            path="/gebeyacart"
                            element={
                                <div className="min-h-screen bg-gray-100">
                                    <Nav />
                                    <ToastNotification />
                                    <div className="container mx-auto p-4">
                                        <h1 className="text-2xl font-bold mb-6">
                                            E-commerce Cart and Checkout System
                                        </h1>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <ProductList />
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </Routes>
                    <Footer />
                </Provider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
