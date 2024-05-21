import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Home />} />
                {/* other routes go here */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
