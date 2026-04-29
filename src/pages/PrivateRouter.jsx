import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
    const isAuthenticated = false; // Simulate authentication status
  return (
    <div>
     {isAuthenticated ? <Outlet /> : <Navigate to="/login" />};
    </div>
  );
};

export default PrivateRouter;