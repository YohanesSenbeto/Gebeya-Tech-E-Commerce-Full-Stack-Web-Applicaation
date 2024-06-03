// CircularNavigation.tsx
import { Link } from "react-router-dom";

const CircularNavigation = () => {
    return (
        <nav className="fixed bottom-6 right-6 z-10 flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full shadow-lg">
                <Link to="/" className="nav-button">Home</Link>
                <Link to="/productList" className="nav-button">Shop</Link>
                <Link to="/about" className="nav-button">About</Link>
                <Link to="/contact" className="nav-button">Contact</Link>
                <Link to="/profile" className="nav-button">Profile</Link>
                <Link to="/addProduct" className="nav-button">Add Product</Link>
                <Link to="/login" className="nav-button">Login</Link>
                <Link to="/signup" className="nav-button">Signup</Link>
                <Link to="/cart" className="nav-button">Cart</Link>
                <Link to="/checkout" className="nav-button">Checkout</Link>
                <Link to="/searchresult" className="nav-button">Search Results</Link>
                {/* Add more links for other routes as needed */}
            </div>
        </nav>
    );
};

export default CircularNavigation;
