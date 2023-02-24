import { AllProducts } from "../../components/AllProducts";
import { Footer } from "../../components/Footer";
import { H1, HomePageContainer } from "./style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <H1>Joakim Computers</H1>
      <AllProducts />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
