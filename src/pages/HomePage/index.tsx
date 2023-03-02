import { lazy, LazyExoticComponent, ComponentType } from "react";
import { Footer } from "../../components/Footer";
import { H1, HomePageContainer } from "./style";
const AllProducts: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import("../../components/AllProducts")
);

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
