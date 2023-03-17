import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IProducts from "../../components/interfaces/IProducts";
import { useProductContext } from "../context/ProductsProvider";
import { Img, ImgContainer, ModalWrapper } from "./style";

export const Modal = () => {
  let { productID } = useParams();
  const idxParams = useParams();
  const { products } = useProductContext();
  const [isModal, setIsModal] = useState<boolean>(false);

  // convert the path string to a number
  let itemIndex = Number(idxParams.index);

  const navigate = useNavigate();

  const product: IProducts = products?.find(
    (product) => product.id === productID
  )!;

  const delayLink = (e: any) => {
    e.preventDefault();
    setIsModal(!isModal);
    setTimeout(() => navigate(-1), 500);
  };

  return (
    <ModalWrapper isModal={isModal} onClick={(e) => delayLink(e)}>
      <ImgContainer isModal={isModal}>
        <Img src={product.images[itemIndex].image} />
      </ImgContainer>
      <p>click anywhere to get back</p>
    </ModalWrapper>
  );
};
