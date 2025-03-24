import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";
import { CitiesContextType } from "../../type/CitiesContextType";

const useCities = (): CitiesContextType => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export default useCities