import {ProductGroup} from "../model/product.group";


export const productsStore: ProductGroup[] = [
  {
    name: 'group1',
    active: true,
    images: [],
    products: []
  }
];


let sequence: number = 0;






productsStore.forEach((g) => {

  if (g.id == null) {
    g.id = ++sequence;
  }

  g.products.forEach((p) => {
    if (p.id == null) {
      p.id = ++sequence;
    }
  });

});
