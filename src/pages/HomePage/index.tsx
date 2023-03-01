import { motion } from "framer-motion";
import { lazy, LazyExoticComponent, ComponentType } from "react";
import { Footer } from "../../components/Footer";
import { useTiming } from "../../components/hooks/useTiming";
import { H1, HomePageContainer, Wrapper } from "./style";
const AllProducts: LazyExoticComponent<ComponentType<any>> = lazy(
  () => import("../../components/AllProducts")
);

const HomePage = () => {
  const timing = useTiming();

  return (
    <Wrapper
      as={motion.div}
      initial={{ scaleX: 0, x: "-60vw" }}
      animate={{ scaleX: 1, x: "0" }}
      exit={{ scaleX: 0, x: "-60vw" }}
      transition={{ duration: `${timing}` }}
    >
      <HomePageContainer
      // initial={{ x: "-100vw" }}
      // animate={{ x: 0 }}
      // exit={{ x: "-100vw" }}
      // transition={{ duration: 0.5 }}
      >
        <H1>Joakim Computers</H1>
        <AllProducts />
        <Footer />
      </HomePageContainer>
    </Wrapper>
  );
};

export default HomePage;
