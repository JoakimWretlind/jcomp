import { GlobalStyle, searchTheme } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import ProductsProvider from "./components/context/ProductsProvider";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { ErrorsPage } from "./pages";
import { Preloader } from "./components/preloader";
import { Logo } from "./components/Logo";
import { lazy, LazyExoticComponent, ComponentType } from "react";
export const HomePage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import("./pages/HomePage")
);
export const DetailsPage: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import("./pages/DetailsPage")
);

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={searchTheme}>
        <Preloader />
        <Logo />
        <ProductsProvider>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:productID" element={<DetailsPage />} />
              <Route path="*" element={<ErrorsPage />} />
            </Routes>
          </AnimatePresence>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
