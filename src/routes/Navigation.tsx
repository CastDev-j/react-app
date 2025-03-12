import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../components/shared/Header";
import ErrorPage from "../components/shared/ErrorPage";
import { Footer } from "../components/shared/Footer";
import { App } from "../pages/App";
import { About } from "../pages/About";
import { Users } from "../pages/Users";
import { LazyPageTemplate as LazyPageOne } from "../01-lazyload/pages/LazyPage.1";
import { LazyPageTemplate as LazyPageTwo } from "../01-lazyload/pages/LazyPage.2";
import { LazyPageTemplate as LazyPageThree } from "../01-lazyload/pages/LazyPage.3";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className=" p-4">
          <Routes>
            <Route path="/" element={<App />} />

            <Route path="/lazy1" element={<LazyPageOne />} />
            <Route path="/lazy2" element={<LazyPageTwo />} />
            <Route path="/lazy3" element={<LazyPageThree />} />

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
