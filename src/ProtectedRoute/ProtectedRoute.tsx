import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFakeAuth from "../contexts/auth/useFakeAuth";


import { ReactNode } from "react";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useFakeAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}


export default ProtectedRoute;
