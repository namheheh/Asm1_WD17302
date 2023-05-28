import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/service.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: Iproduct = {
    name: "",
    price: 0
  }
  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    // Observable
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          price: product.price
        })
      })
    })
  }
  onHandleSubmit() {
    if (this.productForm.invalid) return;

    const product: Iproduct = {
      id: this.product.id,
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0
    }
    this.productService.updateProduct(product).subscribe(data => {
      console.log(data)
    })
  }
}
