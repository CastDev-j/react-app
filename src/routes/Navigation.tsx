import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../components/shared/Header";
import ErrorPage from "../components/shared/ErrorPage";
import { Footer } from "../components/shared/Footer";
import { App } from "../pages/App";
import { About } from "../pages/About";
import { Users } from "../pages/Users";
import { routes } from "../config";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className=" p-4">
          <Routes>
            <Route path="/" element={<App />} />

            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};
