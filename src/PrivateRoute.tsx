import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const auth = localStorage.getItem('auth');
  if (!auth) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}