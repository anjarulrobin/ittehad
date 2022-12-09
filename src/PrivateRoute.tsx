import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const auth = localStorage.getItem('auth');
  if (!auth) {
    console.log('auth')
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}