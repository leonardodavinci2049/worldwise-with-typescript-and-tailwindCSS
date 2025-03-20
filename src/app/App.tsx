import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/AppLayout";

import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import CityList from "../components/CityList";
import City from "../components/City";
import CountryList from "../components/CountryList";
import FormPage from "../components/FormPage";
import { useEffect, useState } from "react";
import { TypeCities } from "../type/typeCities";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [cities, setCities] = useState<TypeCities>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [currentCity, setCurrentCity] = useState(null);
  // const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(function () {
    async function fetchCities() {
      // dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        setIsLoading(true);
      } catch {
        alert("Error fetching cities");
      } finally {
        setIsLoading(false);
      }
      // dispatch({ type: "loaded" });
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="app"
          element={
            // <ProtectedRoute>
            <AppLayout />
            // </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<FormPage />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
