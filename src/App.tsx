import { GlobalStyle, searchTheme } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import ProductsProvider from "./components/context/ProductsProvider";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { DetailsPage, ErrorsPage, HomePage } from "./pages";
import { Preloader } from "./components/preloader";
import { Logo } from "./components/Logo";

function App() {
  const location = useLocation();

  window.addEventListener("load", () => {
    sessionStorage.setItem("loaded", "true");
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={searchTheme}>
        {sessionStorage.getItem("loaded") ? <Logo /> : <Preloader />}

        <ProductsProvider>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/:productID" element={<DetailsPage />} />
              <Route path="*" element={<ErrorsPage />} />
            </Routes>
          </AnimatePresence>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
