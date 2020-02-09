import { Component, OnInit } from '@angular/core';
// import { products } from '../../products';
import { ProductService } from '../shared/product.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
    // this.products = this.productService.getProducts()

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data
      },
      (err) => { console.log('次のエラーが出力されました：' + err) }
      // () => { console.log('完了しました！') }
    )
  }

}
