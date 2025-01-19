import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

// Mock authentication check
const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
};

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/auth/login" replace />;
    }
    return children;
};

export default PrivateRoute;
