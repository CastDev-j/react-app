import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import { routes } from "../config";
import { Suspense } from "react";
import { LoadingPage } from "../components/shared/LoadingPage";

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <Header />
          <div className=" p-4">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={<route.Component />}
                />
              ))}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
};
