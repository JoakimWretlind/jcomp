import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  SetStateAction,
} from "react";
import { ErrorsPage } from "../../pages";
import IProducts from "../interfaces/IProducts";

interface ProductContext {
  children?: ReactNode | undefined;
  products?: IProducts[] | undefined;
}

const productContext = createContext({} as ProductContext);

export const useProductContext = () => {
  return useContext(productContext);
};

function useProductProvider() {
  const [products, setProducts] = useState<IProducts[] | undefined>();

  // Fetch data
  useEffect(() => {
    console.log("fetching ProductProvider");
    const fetchData = async () => {
      try {
        const res = await import("../../../api/products.json");
        const data = res;
        setProducts(data.products as IProducts[]);
      } catch (err) {
        <ErrorsPage />;
      }
    };
    fetchData();
  }, []);
  return { products };
}

const ProductsProvider = ({ children }: ProductContext) => {
  const prods: ProductContext = useProductProvider();
  console.log("PRODS:", prods);
  return (
    <productContext.Provider value={prods}>{children}</productContext.Provider>
  );
};

export default ProductsProvider;
