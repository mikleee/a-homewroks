import {Entity} from "./entity";
import {Product} from "./product";

export interface ProductGroup extends Entity {
  images: string[];
  products: Product[];
}
