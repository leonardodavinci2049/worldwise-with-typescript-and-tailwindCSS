import { useContext } from "react";
import { AuthContextType } from "../../type/AuthContextType";
import { AuthContext } from "./FakeAuthContext";

const useFakeAuth= (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export default useFakeAuth