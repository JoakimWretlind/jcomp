import IProducts from "../interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import { CardContainer, H2, Overlay, ProductsPageWrapper } from "./style";
import { useState } from "react";
import { SectionWrapper } from "../ProductCard/style";
import { motion } from "framer-motion";
import { HorizontalStaggerTransition } from "../animations/pageTransitions/staggerHorizontal";
import Searchbar from "../Searchbar";
import ProductCard from "../ProductCard";

const AllProducts = () => {
  const { products } = useProductContext();
  const [search, setSearch] = useState<string>("");
  const [isDetails, setIsDetails] = useState<boolean>(false);

  const filteredProducts = products?.filter((item) => {
    if (search.toLowerCase() === "") {
      return item;
    } else if (
      item.brand.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.model.toLowerCase().includes(search)
    ) {
      return item;
    }
  });

  const handleActive = () => {
    if (isDetails == true) {
      return <HorizontalStaggerTransition />;
    }
  };

  return (
    <>
      <ProductsPageWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.5, 0.11, 0.45, 0.15],
        }}
        exit={{
          opacity: 1,
          transition: {
            delay: 0,
          },
        }}
      >
        <Searchbar setSearch={setSearch} />
        <SectionWrapper>
          <CardContainer>
            {!filteredProducts?.length ? (
              <H2>We are sorry, we can not find what you are looking for.</H2>
            ) : (
              filteredProducts?.map((product: IProducts) => {
                return (
                  <Link
                    key={product.id}
                    to={`/${product.id}`}
                    onClick={() => setIsDetails(!isDetails)}
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ProductCard {...product} />
                    </motion.div>
                  </Link>
                );
              })
            )}
          </CardContainer>
        </SectionWrapper>
        <Overlay isDetails={isDetails}>{handleActive()}</Overlay>
      </ProductsPageWrapper>
    </>
  );
};
export default AllProducts;
