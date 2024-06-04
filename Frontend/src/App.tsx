// App.tsx
import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
//import ProductLists from "./components/ProductLists";
import CircularNavigation from "./components/CircularNavigation";
import Contact from "./components/contact";
import About from "./components/about";
import Profile from "./components/profile";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { Provider } from "react-redux";
//gebeyacart import
import store from "./components/gebeyacart/App/store";
import ProductList from "./components/gebeyacart/ProductList";
import Cart from "./components/gebeyacart/Cart";
import Checkout from "./components/gebeyacart/Checkout";
import ToastNotification from "./components/gebeyacart/ToastNotification";
import CheckoutSuccess from "./components/gebeyacart/CheckoutSuccess";
import ProductSearchResults from "./components/ProductSearchResults";
import { SearchProvider } from './components/SearchContext';


import AddProducts from './components/Pages/admin/AddProducts';
import Unauthorized from './components/Pages/Unauthorized';
// Import the Orders and Customers components 
import Orders from './components/Pages/admin/Orders';

// Import the Users component 
import Users from './components/Pages/admin/Users';
import BackendPro from './components/services/BackendPro';



// Import the PrivateAuthRoute component 
import PrivateAuthRoute from './components/Auth/PrivateAuthRoute';
import ImageUploader from "./components/ImageUploader";


function App() {
    
    return (
        
            <SearchProvider>
            <AuthProvider>
                <Provider store={store}>
            
                    <Navbar/>
                  
                     <ToastNotification />
                    <Routes>
                    
                    <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login/>}
                        />
                        <Route path="/imageuploader" element={<ImageUploader/>} />
                        <Route path="/productList" element={  <BackendPro />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/BackendPro" element={<BackendPro />} />
                        
                      
                        
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/searchresult" element={<ProductSearchResults />} />
                        <Route path="/checkout-success"
                            element={<CheckoutSuccess />}
                        />
                        <Route
                            path="/gebeyacart"
                            element={<Cart />}
                        
                        />


<Route path="/unauthorized" element={<Unauthorized />} />
        {/* // Add the Orders Route  */}
        <Route path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2]}>
              <Orders />
            </PrivateAuthRoute>
          } />

<Route path="/profile" element={
  <PrivateAuthRoute roles={[1, 2]}>
  <Profile />
</PrivateAuthRoute>

} />

       
        {/* // Add the Users Route  */}
        <Route path="/admin/Users" element={<Users />} />
        <Route path="/admin/AddProducts"
          element={
            <PrivateAuthRoute roles={[2]}>
              <AddProducts />
            </PrivateAuthRoute>
          } />
        {/* 
         
          Orders (/admin/orders) - Can be accessed by all Users
          Add  (/admin/addProducts) - admins only 
            - Admin: 2
           
        */}



                    </Routes>
                    <BackendPro />
                    <Footer />
                  
                </Provider>
            </AuthProvider>
            </SearchProvider>
        
    );
}

export default App;
