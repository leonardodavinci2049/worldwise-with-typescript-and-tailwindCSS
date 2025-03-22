import { useContext } from "react";
import { CitiesContextType } from "../type/CitiesContextType";
import { CitiesContext } from "./CitiesContext";

const useCities = (): CitiesContextType => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export default useCities