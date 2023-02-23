import IProducts from "../interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import { ItemContainer, ProductsContainer } from "./style";

export const AllProducts = () => {
  const { products } = useProductContext();
  return (
    <>
      <ProductsContainer>
        {products ? (
          products.map((product: IProducts) => {
            return (
              <ItemContainer key={product.id}>
                <Link to={`/products/${product.id}`}>
                  {/* <ProductCard {...product} /> */}
                  <h3>{product.brand}</h3>
                  <p>{product.category}</p>
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
