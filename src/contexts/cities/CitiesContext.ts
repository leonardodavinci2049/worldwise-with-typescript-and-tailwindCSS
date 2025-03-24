import { createContext } from "react";
import { initialState } from "./initialStateCity";
import { CitiesContextType } from "../../type/CitiesContextType";

const CitiesContext = createContext(initialState as CitiesContextType);



export { CitiesContext };
