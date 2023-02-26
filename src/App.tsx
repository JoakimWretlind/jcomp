import { GlobalStyle, searchTheme } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import ProductsProvider from "./components/context/ProductsProvider";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, DetailsPage, ErrorsPage } from "./pages";
import { Preloader } from "./components/preloader";
import { Logo } from "./components/Logo";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={searchTheme}>
        <Preloader />
        <Logo />
        <ProductsProvider>
          <AnimatePresence mode="wait">
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
