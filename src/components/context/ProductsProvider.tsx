import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
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

  // Fetch data - we are using await import here (instead of await fetch),
  // since the data is in our local files.
  useEffect(() => {
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
  return (
    <productContext.Provider value={prods}>{children}</productContext.Provider>
  );
};

export default ProductsProvider;
