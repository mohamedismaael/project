import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { IProduct } from '../../../shared/interfaces/iproduct';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  private readonly route = inject(ActivatedRoute);
 private readonly productsService = inject(ProductsService); 

  product: IProduct = {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: ''
  };

  getProductData(): void {
    this.productsService.getspecifiproduct(+this.route.snapshot.params['id']).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (err) => {
        console.error(err); 
      },
    });
  }

  ngOnInit(): void {
    initFlowbite();
    this.getProductData();
  }
}
