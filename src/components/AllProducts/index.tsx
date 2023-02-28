import IProducts from "../interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import {
  ButtonWrapper,
  CardContainer,
  H2,
  Overlay,
  ProductsPageWrapper,
} from "./style";
import { ProductCard } from "../ProductCard";
import { useState } from "react";

import buttonData from "./buttonData.json";
import { StaggerTransition } from "../animations/pageTransitions/StaggerTransition";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ProductCard/style";
import { Searchbar } from "../Searchbar";

type ButtonProps = {
  id: number;
  title: string;
  path: string;
};

export const AllProducts = () => {
  const { products } = useProductContext();
  const [search, setSearch] = useState<string>("");
  const [isDetails, setIsDetails] = useState<boolean>(false);

  const handleActive = () => {
    if (isDetails == true) {
      return <StaggerTransition />;
    }
  };

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

  return (
    <>
      <ProductsPageWrapper
        as={motion.div}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.35,
          ease: [0.5, 0.11, 0.45, 0.15],
        }}
        exit={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
      >
        <Searchbar setSearch={setSearch} />
        <ButtonWrapper>
          {buttonData.map((btn: ButtonProps) => {
            const { id, title, path } = btn;
            return (
              <button
                key={id}
                onClick={() => setSearch(`${path}`)}
                aria-label={`filter ${path}`}
              >
                {title}
              </button>
            );
          })}
        </ButtonWrapper>
        <SectionWrapper>
          <CardContainer>
            {!filteredProducts?.length ? (
              <H2>We are sorry, we can not find what you are looking for.</H2>
            ) : (
              filteredProducts?.map((product: IProducts) => {
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      onClick={() => setIsDetails(!isDetails)}
                    >
                      <ProductCard {...product} />
                    </Link>
                  </motion.div>
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
