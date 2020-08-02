import {Injectable} from "@angular/core";
import {catalogueStore} from "./catalogue.store";
import {ProductCategory} from "./catalogue.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  getProductCategories(): ProductCategory[] {
    return catalogueStore
  }

}
