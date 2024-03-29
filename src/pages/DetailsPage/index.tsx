import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../../components/context/ProductsProvider";
import IProducts, { IImages } from "../../components/interfaces/IProducts";
import { motion } from "framer-motion";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import {
  PageWrapper,
  BackButton,
  Header,
  HeaderContainer,
  Img,
  ImgHolder,
  ImgWrapper,
  ItemWrapper,
  MainWrapper,
  TextPane,
  TextWrapper,
} from "./style";

const DetailsPage02 = () => {
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
      <PageWrapper
        key={id}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.5, 0.11, 0.45, 0.15] }}
        exit={{ opacity: 0 }}
      >
        <MainWrapper>
          <HeaderContainer>
            <BackButton to="/">
              <div className="icon">
                <HiOutlineArrowLongLeft />
              </div>
              <p>back</p>
            </BackButton>
            <Header>
              <h2>{`${brand} ${model}`}</h2>
            </Header>
          </HeaderContainer>
          <ItemWrapper>
            <ImgWrapper>
              {images.map((image: IImages, idx: number) => {
                return (
                  <Link key={image.id} to={`/${product.id}/${idx}`}>
                    <ImgHolder>
                      <Img src={image.image} alt={`${brand} ${model}`} />
                    </ImgHolder>
                  </Link>
                );
              })}
            </ImgWrapper>
            <TextPane>
              <TextWrapper>
                <h4>{category}</h4>
                <p>{infoDetail}</p>
                {size ? <p>Storlek: {size}"</p> : null}
                {color ? <p>Färg: {color}</p> : null}
                <p className="price">Pris: ${price}</p>
              </TextWrapper>
            </TextPane>
          </ItemWrapper>
        </MainWrapper>
      </PageWrapper>
    );
  } catch (err) {
    return <h1>oops</h1>;
  }
};

export default DetailsPage02;
