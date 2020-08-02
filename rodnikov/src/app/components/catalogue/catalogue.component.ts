import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "./catalogue.service";
import {ProductCategory} from "./catalogue.model";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  categories: ProductCategory[];

  constructor(private productsService: CatalogueService) {
  }

  ngOnInit(): void {
    this.categories = this.productsService.getProductCategories();
  }

}
