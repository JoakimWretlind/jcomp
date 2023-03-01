import IProducts from "../interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import { ButtonWrapper, CardContainer, H2, ProductsPageWrapper } from "./style";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import buttonData from "./buttonData.json";
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
        <SectionWrapper>
          <CardContainer>
            {!filteredProducts?.length ? (
              <H2>We are sorry, we can not find what you are looking for.</H2>
            ) : (
              filteredProducts?.map((product: IProducts) => {
                return (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    onClick={() => setIsDetails(!isDetails)}
                  >
                    <ProductCard {...product} />
                  </Link>
                );
              })
            )}
          </CardContainer>
        </SectionWrapper>
      </ProductsPageWrapper>
    </>
  );
};
