import IProducts from "../interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import {
  ButtonWrapper,
  Overlay,
  ProductsContainer,
  ProductsPageWrapper,
} from "./style";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { Searchbar } from "../Searchbar";
import buttonData from "./buttonData.json";
import { StaggerTransition } from "../animations/pageTransitions/StaggerTransition";
import { motion } from "framer-motion";

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
    console.log("hmmm");
    if (isDetails == true) {
      console.log("yeps");
      return <StaggerTransition />;
    }
  };

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
        <ProductsContainer>
          {products ? (
            products
              .filter((item: IProducts) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.brand.toLowerCase().includes(search) ||
                      item.category.toLowerCase().includes(search) ||
                      item.model.toLowerCase().includes(search);
              })
              .map((product: IProducts) => {
                return (
                  <Link
                    key={product.id}
                    onClick={() => setIsDetails(!isDetails)}
                    to={`/products/${product.id}`}
                  >
                    <ProductCard {...product} />
                  </Link>
                );
              })
          ) : (
            <h2>Loading...</h2>
          )}
        </ProductsContainer>
        <Overlay isDetails={isDetails}>{handleActive()}</Overlay>
      </ProductsPageWrapper>
    </>
  );
};
