import {Component, OnInit} from "@angular/core";
import {ProductsService} from "./service/products.service";
import {ProductGroup} from "./model/product.group";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rodnikov';
  productGroups: ProductGroup[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productGroups = this.productsService.getActiveProducts();
  }

}
