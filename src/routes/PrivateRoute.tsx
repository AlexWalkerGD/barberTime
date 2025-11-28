import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useUser();

  // Se não estiver logado → manda para o login (Home, no seu caso)
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
