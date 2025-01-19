import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../containers/NotFound";
import Dashboard from "../containers/app/dashboard";
import AddReading from "../containers/app/AddReading";
import History from "../containers/app/History";

const AppRoutes = () => {
    return (
        <>
            <Routes >
                {/* Public Routes */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-reading" element={<AddReading />} />
                <Route path="/history" element={<History />} />

                {/* Fallback Route for 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
