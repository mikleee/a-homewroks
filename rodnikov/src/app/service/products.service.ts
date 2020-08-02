import {Injectable} from "@angular/core";
import {productsStore} from "./products.store";
import {ProductGroup} from "../model/product.group";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getActiveProducts(): ProductGroup[] {
    return productsStore
  }

}
