import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../../Context/AuthContext";

const PrivateRoutes = () => {

    const { user } = useAuth();

    if (user === null) return <div>Loading...</div>;
    if (!user) return <Navigate to="/login" />;

    return (
        // otherwise give it to the outlet that holds the protected routes
        <Outlet/>
    )
}

export default PrivateRoutes;