import { createContext } from "react";
import { initialContext } from "./initialStateAuth";

const AuthContext = createContext(initialContext);

export { AuthContext };
