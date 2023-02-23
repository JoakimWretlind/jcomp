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
  const [products, setPro] = useState<IProducts[]>();

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("../../../api/products.json");
        const data = await res.json();
        setPro(data.products);
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
