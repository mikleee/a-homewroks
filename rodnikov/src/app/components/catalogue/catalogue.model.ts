export interface Product {
  id?: number;
  name: string;
  price: number;
  priceLower?: number;
  images: string[];
}

export interface ProductCategory {
  id?: number;
  name: string;
  images: string[];
  products: Product[];
}

