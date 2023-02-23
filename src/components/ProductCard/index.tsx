import IProducts from "../interfaces/IProducts";
import { Card, CardContent } from "./style";

export const ProductCard = (product: IProducts) => {
  const { displayimage, brand, category, model, displayDetail, price } =
    product;
  return (
    <Card>
      <CardContent>
        <img src={displayimage} alt="img" />
        <div>
          <h5>{brand}</h5>
          <h6>{category}</h6>
          <hr />
          <p className="model">{model}</p>
          <p>{displayDetail}</p>
          <p>{price}</p>
        </div>
      </CardContent>
    </Card>
  );
};
