import { AllProducts } from "../../components/AllProducts";
import { Footer } from "../../components/Footer";
import { HomePageContainer } from "./style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Joakim Computers</h1>
      <AllProducts />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
