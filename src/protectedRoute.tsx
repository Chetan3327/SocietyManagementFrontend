import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode; // Define the type for the children prop
  redirectPath?: string; // Optional prop to specify a custom redirect path
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectPath = "/login" }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token); // Check authentication status
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading state while checking auth
  }

  return isAuthenticated ? <>{children}</> : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
