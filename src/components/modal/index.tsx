import { useParams, useNavigate } from "react-router-dom";
import IProducts from "../../components/interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { ModalWrapper } from "./style";

export const Modal = () => {
  let { productID } = useParams();
  const idxParams = useParams();
  const { products } = useProductContext();

  const navigate = useNavigate();

  const product: IProducts = products?.find(
    (product) => product.id === productID
  )!;

  // Navigate back to details page
  const goBack = () => {
    navigate(-1);
  };

  // convert the path string to a number
  let itemIndex = Number(idxParams.index);

  return (
    <ModalWrapper onClick={goBack}>
      <img src={product.images[itemIndex].image} />
    </ModalWrapper>
  );
};
