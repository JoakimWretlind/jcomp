import { Link, useParams } from "react-router-dom";
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
      <DetailsWrapper key={id}>
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
    console.log(err);
    return <h1>err</h1>;
  }
};

export default DetailsPage;
