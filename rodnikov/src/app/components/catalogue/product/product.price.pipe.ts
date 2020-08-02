import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../catalogue.model";

@Pipe({
  name: 'productPrice'
})
export class ProductPricePipe implements PipeTransform {
  transform(value: Product, ...args: any[]) {
    let prefix;
    let price;

    if (value.priceLower) {
      price = value.priceLower;
      prefix = 'от';
    } else {
      price = value.price;
      prefix = '';
    }


    if (isNaN(price)) {
      return 'уточняйте';
    } else {
      return `${prefix} ${parseFloat(price).toFixed(2)} ₴`;
    }

  }


}
