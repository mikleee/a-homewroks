import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogueComponent} from "./components/catalogue/catalogue.component";
import {Screen404Component} from "./components/screen404/screen404.component";
import {ProductCategoryComponent} from "./components/catalogue/product-category/product-category.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {PaymentAndDeliveryComponent} from "./components/payment-and-delivery/payment-and-delivery.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    children: [
      {
        path: 'category/:id',
        component: ProductCategoryComponent
      }
    ]
  },
  {
    path: 'payment-and-delivery',
    component: PaymentAndDeliveryComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: '**',
    component: Screen404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
