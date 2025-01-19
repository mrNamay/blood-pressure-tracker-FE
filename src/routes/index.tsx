import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import NotFoundPage from "../containers/NotFound";
import LoginPage from "../containers/auth/LoginPage";
import RegisterPage from "../containers/auth/RegisterPage";
import PrivateRoute from "./PrivateRoute"; // Assumes it handles authentication logic
import AppLayout from "../containers/app/AppLayout";
import Dashboard from "../containers/app/dashboard";
import AddReadingPage from "../containers/app/AddReading";
import HistoryPage from "../containers/app/History";

const IndexRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />

                {/* Private Routes */}
                <Route
                    path="/app"
                    element={
                        <PrivateRoute>
                            <AppLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<Dashboard />} /> {/* Default route */}
                    <Route path="add-reading" element={<AddReadingPage />} />
                    <Route path="history" element={<HistoryPage />} />
                </Route>

                {/* Fallback Route for 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default IndexRoutes;
