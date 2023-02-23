import { GlobalStyle, searchTheme } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { HomePage, DetailsPage, ErrorsPage } from "./pages";
import ProductsProvider from "./components/context/ProductsProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={searchTheme}>
        <ProductsProvider>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:productID" element={<DetailsPage />} />
            <Route path="*" element={<ErrorsPage />} />
          </Routes>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
