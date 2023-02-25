import IProducts from "../interfaces/IProducts";
import { Card } from "./style";

export const ProductCard = (product: IProducts) => {
  const { displayimage, brand, category, model, displayDetail, price } =
    product;
  return (
    <Card>
      <div className="left">{/* <img src={displayimage} alt="img" /> */}</div>
      <div className="right">
        <h5>{brand}</h5>
        <h6>{category}</h6>
        <hr />
        <p className="model">{model}</p>
        <p className="details">{displayDetail}</p>
        <p className="price">Price: ${price}</p>
      </div>
    </Card>
  );
};
