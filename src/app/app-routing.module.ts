import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from "../app/add-product/add-product.component";
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {path:'add-product',component:AddProductComponent},
  {path:'',component:ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
