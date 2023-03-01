import { useParams } from "react-router-dom";
import { useProductContext } from "../../components/context/ProductsProvider";
import IProducts, { IImages } from "../../components/interfaces/IProducts";
import {
  AllImagesContainer,
  DetailsContainer,
  DetailsWrapper,
  ImgContainer,
  InfoContainer,
  Links,
  TextPane,
} from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";

const DetailsPage = () => {
  let { productID } = useParams();
  const { products } = useProductContext();

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
        initial={{ scaleX: 0, x: "60vw" }}
        animate={{ scaleX: 1, x: "0" }}
        exit={{ scaleX: 0, x: "60vw" }}
        transition={{ duration: 0.5 }}
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
              <h4>{category}</h4>
              <p>{infoDetail}</p>
              {size ? <p>Storlek: {size}"</p> : null}
              {color ? <p>Färg: {color}</p> : null}
              <p className="price">Pris: {price}$</p>
            </InfoContainer>

            <Links to="/">
              <AiOutlineArrowLeft />
              <p>back</p>
            </Links>
          </TextPane>
        </DetailsContainer>
      </DetailsWrapper>
    );
  } catch (err) {
    return <h1>oops</h1>;
  }
};

export default DetailsPage;
