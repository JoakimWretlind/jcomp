import { GlobalStyle, searchTheme } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { HomePage, DetailsPage, ErrorsPage } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={searchTheme}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productID" element={<DetailsPage />} />
          <Route path="*" element={<ErrorsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
