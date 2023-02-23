import IProducts from "../interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import { ItemContainer, ProductsContainer } from "./style";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { Searchbar } from "../Searchbar";

export const AllProducts = () => {
  const [search, setSearch] = useState<string>("");
  const { products } = useProductContext();

  return (
    <>
      <Searchbar setSearch={setSearch} />
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
    </>
  );
};
