import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                {/* other routes go here */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
