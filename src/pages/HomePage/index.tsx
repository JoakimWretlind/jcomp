import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AllProducts } from "../../components/AllProducts";
import { Footer } from "../../components/Footer";
import { H1, HomePageContainer } from "./style";

const HomePage = () => {
  const [timing, setTiming] = useState<number>(0.3);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth < 465) {
      setTiming(0.3);
    } else if (screenWidth >= 465 && screenWidth < 768) {
      setTiming(0.4);
    } else {
      setTiming(0.5);
    }
  });

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
