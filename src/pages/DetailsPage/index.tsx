import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../../components/context/ProductsProvider";
import IProducts, { IImages } from "../../components/interfaces/IProducts";

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
      <div key={id}>
        <h2>{`${brand} ${model}`}</h2>
        <div>
          {images.map((image: IImages) => {
            return (
              <div key={image.id}>
                <img src={image.image} alt={`${brand} ${model}`} />
              </div>
            );
          })}
          <div>
            <h4>{category}</h4>
            <p>{infoDetail}</p>
            {size ? <p>Storlek: {size}"</p> : null}
            {color ? <p>Färg: {color}</p> : null}
            <p className="price">Pris: {price}$</p>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
    return <h1>err</h1>;
  }
};

export default DetailsPage;
