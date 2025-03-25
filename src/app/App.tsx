import { lazy, Suspense} from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "../contexts/cities/CitiesProvider";
// ------ Pages --------
//import AppLayout from "../pages/AppLayout/AppLayout";
// import Homepage from "../pages/Homepage/Homepage";
// import Login from "../pages/Login/Login";
// import Pricing from "../pages/Pricing/Pricing";
//import Product from "../pages/Product/Product";
//import PageNotFound from "../pages/PageNotFound/PageNotFound";
// ------ Components --------
import CityList from "../pages/AppLayout/pages/city/CityList";
import City from "../pages/AppLayout/pages/city/City";
import CountryList from "../pages/AppLayout/pages/countries/CountryList";
import FormPage from "../pages/AppLayout/pages/FormPage";
import { AuthProvider } from "../contexts/auth/FakeAuthProvider";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SpinnerFullPage from "../common-components/SpinnerFullPage";

const Homepage = lazy(() => import( "../pages/Homepage/Homepage"));
const Product = lazy(() => import("../pages/Product/Product"));
const Pricing = lazy(() => import("../pages/Pricing/Pricing"));
const Login = lazy(() => import("../pages/Login/Login"));
const AppLayout = lazy(() => import("../pages/AppLayout/AppLayout"));
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));

// dist/assets/index-59fcab9b.css   30.56 kB │ gzip:   5.14 kB
// dist/assets/index-f7c12d89.js   572.44 kB │ gzip: 151.29 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<FormPage />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;