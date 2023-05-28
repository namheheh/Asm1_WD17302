import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/service.service';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {

  products: Iproduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((item) => item.id != id)
    })
  }
}
