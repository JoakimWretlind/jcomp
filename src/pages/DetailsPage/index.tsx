import { useParams } from "react-router-dom";
import { useProductContext } from "../../components/context/ProductsProvider";
import IProducts, { IImages } from "../../components/interfaces/IProducts";
import {
  AllImagesContainer,
  BackIcon,
  DetailsContainer,
  DetailsWrapper,
  ImgContainer,
  InfoContainer,
  TextPane,
} from "./style";
import { motion } from "framer-motion";
import { useTiming } from "../../components/hooks/useTiming";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Wrapper } from "../../styles/commonStyles";
import { FadeInTransition } from "../../components/animations/pageTransitions/fadeInTransition";

const DetailsPage = () => {
  let { productID } = useParams();
  const { products } = useProductContext();
  const timing = useTiming();

  try {
    const product: IProducts = products?.find(
      (product) => product.id === productID
    )!;

    const {
      id,
      brand,
      model,
      images,
      color,
      category,
      infoDetail,
      size,
      price,
    } = product;

    return (
      <DetailsWrapper
        key={id}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.5, 0.11, 0.45, 0.15] }}
        exit={{ opacity: 0 }}
      >
        <h2>{`${brand} ${model}`}</h2>
        <DetailsContainer>
          <AllImagesContainer>
            {images.map((image: IImages) => {
              return (
                <ImgContainer key={image.id}>
                  <img src={image.image} alt={`${brand} ${model}`} />
                </ImgContainer>
              );
            })}
          </AllImagesContainer>
          <TextPane>
            <InfoContainer>
              <BackIcon to="/">
                <IoReturnUpBackOutline />
              </BackIcon>
              <h4>{category}</h4>
              <p>{infoDetail}</p>
              {size ? <p>Storlek: {size}"</p> : null}
              {color ? <p>Färg: {color}</p> : null}
              <p className="price">Pris: {price}$</p>
            </InfoContainer>
          </TextPane>
        </DetailsContainer>
      </DetailsWrapper>
    );
  } catch (err) {
    return <h1>oops</h1>;
  }
};

export default DetailsPage;
