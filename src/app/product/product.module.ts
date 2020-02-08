import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
     path: '', component: ProductComponent,
     children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent }
     ]
    },


];

@NgModule({

  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],

  providers: [],
  bootstrap: []
})
export class ProductModule { }
