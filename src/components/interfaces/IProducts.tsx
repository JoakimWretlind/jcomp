export interface IImages {
  id: string;
  image: string;
}

export default interface IProducts {
  id: string;
  category: string;
  brand: string;
  model: string;
  size: string;
  price: string;
  displayimage: string;
  displayDetail: string;
  infoDetail: string;
  images: Array<IImages>;
  color?: string;
}
