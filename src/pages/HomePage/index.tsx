import { motion } from "framer-motion";
import { lazy, LazyExoticComponent, ComponentType } from "react";
import { Footer } from "../../components/Footer";
import { useTiming } from "../../components/hooks/useTiming";
import { H1, HomePageContainer } from "./style";
const AllProducts: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import("../../components/AllProducts")
);

const HomePage = () => {
  const timing = useTiming();

  return (
    <HomePageContainer
      as={motion.div}
      // initial={{ scaleX: 0, x: "-60vw" }}
      // animate={{ scaleX: 1, x: "0" }}
      // exit={{ scaleX: 0, x: "-60vw" }}
      // transition={{ duration: `${timing}` }}
      // initial={{ x: "-100vw" }}
      // animate={{ x: 0 }}
      // exit={{ x: "-100vw" }}
      // transition={{ duration: 0.5 }}
      initial={{ x: "-100vw" }}
      animate={{
        x: "70px",
      }}
      transition={{
        x: { type: "spring", stiffness: 50 },
        duration: 0.8,
        delay: 0,
      }}
    >
      <H1>Joakim Computers</H1>
      <AllProducts />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
