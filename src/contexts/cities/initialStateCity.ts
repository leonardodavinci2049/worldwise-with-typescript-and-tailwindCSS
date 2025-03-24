import { CitiesContextType } from "../type/CitiesContextType";

const initialState: CitiesContextType = {
  cities: [],
  isLoading: false,
  currentCity: {
    id: "0",
    cityName: "",
    country: "",
    emoji: "",
    date: "",
    notes: "",
    position: {
      lat: 0,
      lng: 0,
    },
  },
  error: "",
  getCity: () => {},
  createCity: () => {},
  deleteCity: () => {},
};

export { initialState };
