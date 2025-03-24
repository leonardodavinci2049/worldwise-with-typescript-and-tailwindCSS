import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TypeCities } from "../type/typeCities";
import { CitiesProvider } from "../contexts/cities/CitiesProvider";
// ------ Pages --------
import AppLayout from "../pages/AppLayout/AppLayout";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Pricing from "../pages/Pricing/Pricing";
import Product from "../pages/Product/Product";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
// ------ Components --------
import CityList from "../pages/AppLayout/pages/city/CityList";
import City from "../pages/AppLayout/pages/city/City";
import CountryList from "../pages/AppLayout/pages/countries/CountryList";
import FormPage from "../pages/AppLayout/pages/FormPage";
import { AuthProvider } from "../contexts/auth/FakeAuthProvider";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />

            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
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
      </CitiesProvider>
    </AuthProvider>
  );
};
export default App;
