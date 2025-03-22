import { TypeCity } from "./typeCities";

interface CitiesContextType {
  cities: TypeCity[];
  isLoading: boolean;
  currentCity: TypeCity;
  error: string;
  getCity: (id: number) => void;
  createCity: (newCity: object) => void;
  deleteCity: (id: number) => void;
}

export type { CitiesContextType };