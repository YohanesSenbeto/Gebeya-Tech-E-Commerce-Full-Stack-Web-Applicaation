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

import { AuthProvider } from './components/Contexts/AuthContext';

function App() {
    return (
        <BrowserRouter>
<AuthProvider>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/ProductList" element={<ProductList />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Eypro" element={<Eypro />} />

                {/* other routes go here */}
            </Routes>
</AuthProvider>
        </BrowserRouter>
    );
}

export default App;
