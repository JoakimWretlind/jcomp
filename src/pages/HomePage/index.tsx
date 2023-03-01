import { motion } from "framer-motion";
import { AllProducts } from "../../components/AllProducts";
import { Footer } from "../../components/Footer";
import { H1, HomePageContainer } from "./style";

const HomePage = () => {
  return (
    <HomePageContainer
      as={motion.div}
      initial={{ scaleX: 0, x: "-60vw" }}
      animate={{ scaleX: 1, x: "0" }}
      exit={{ scaleX: 0, x: "-60vw" }}
      transition={{ duration: 0.5 }}
    >
      <H1>Joakim Computers</H1>
      <AllProducts />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
