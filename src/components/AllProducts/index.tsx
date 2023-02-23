import IProducts from "../interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import {
  ButtonWrapper,
  ItemContainer,
  ProductsContainer,
  ProductsPageWrapper,
} from "./style";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { Searchbar } from "../Searchbar";
import buttonData from "./buttonData.json";

type ButtonProps = {
  id: number;
  title: string;
  path: string;
};

export const AllProducts = () => {
  const [search, setSearch] = useState<string>("");
  const { products } = useProductContext();

  return (
    <>
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
                    <Link to={`/products/${product.id}`}>
                      <ProductCard {...product} />
                    </Link>
                  </ItemContainer>
                );
              })
          ) : (
            <h2>Loading...</h2>
          )}
        </ProductsContainer>
      </ProductsPageWrapper>
    </>
  );
};
