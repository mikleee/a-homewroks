import {Component, OnInit} from '@angular/core';
import {ProductCategory} from "../catalogue.model";
import {ActivatedRoute} from '@angular/router';
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  category: ProductCategory;

  constructor(private route: ActivatedRoute,
              private productsService: CatalogueService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.category = this.productsService.getProductCategories().find(c => c.id == id);
    });

  }

}
