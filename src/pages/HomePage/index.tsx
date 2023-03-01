import { motion } from "framer-motion";
import { AllProducts } from "../../components/AllProducts";
import { Footer } from "../../components/Footer";
import { useTiming } from "../../components/hooks/useTiming";
import { H1, HomePageContainer } from "./style";

const HomePage = () => {
  const timing = useTiming();

  return (
    <HomePageContainer
      as={motion.div}
      initial={{ scaleX: 0, x: "-60vw" }}
      animate={{ scaleX: 1, x: "0" }}
      exit={{ scaleX: 0, x: "-60vw" }}
      transition={{ duration: `${timing}` }}
    >
      <H1>Joakim Computers</H1>
      <AllProducts />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
