import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ToastNotification: React.FC = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
        />
    );
};

export default ToastNotification;
