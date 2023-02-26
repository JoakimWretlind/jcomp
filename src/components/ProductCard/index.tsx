import IProducts from "../interfaces/IProducts";
import { Card, Left, Right } from "./style";

export const ProductCard = (product: IProducts) => {
  const { displayimage, brand, category, model, displayDetail, price } =
    product;
  return (
    <Card>
      <Left>
        <img src={displayimage} alt="img" />
      </Left>
      <Right>
        <h5>{brand}</h5>
        <h6>{category}</h6>
        <hr />
        <p className="model">{model}</p>
        <p className="details">{displayDetail}</p>
        <p className="price">Price: ${price}</p>
      </Right>
    </Card>
  );
};
