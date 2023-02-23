import { AllProducts } from "../../components/AllProducts";
import { HomePageContainer } from "./style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Joakim Computers</h1>
      <AllProducts />
    </HomePageContainer>
  );
};

export default HomePage;
