import IProducts from "../interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import {
  ButtonWrapper,
  ItemContainer,
  Overlay,
  ProductsContainer,
  ProductsPageWrapper,
} from "./style";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { Searchbar } from "../Searchbar";
import buttonData from "./buttonData.json";
import { StaggerTransition } from "../animations/pageTransitions/StaggerTransition";
import { FadeInTransition } from "../animations/pageTransitions/fadeInTransition";

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
      <FadeInTransition />
      <ProductsPageWrapper>
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
                  <ItemContainer key={product.id}>
                    <Link
                      onClick={() => setIsDetails(!isDetails)}
                      to={`/products/${product.id}`}
                    >
                      <ProductCard {...product} />
                    </Link>
                  </ItemContainer>
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
