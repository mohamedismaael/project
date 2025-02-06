// import { Product } from './../../../core/services/products/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service'; 
import { IProduct } from '../../../shared/interfaces/iproduct';
import { ProductsComponent } from '../products/products.component';
import { NgOptimizedImage } from '@angular/common'
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-home',
  imports: [ProductsComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private readonly productsService = inject(ProductsService); 

  products: IProduct[] = [];

  getProductsData(): void {
    this.productsService.getallproducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error(err); 
      },
    });
  }

  ngOnInit(): void {
    initFlowbite();
    this.getProductsData();
  }
}


// scrollToProducts() {
//   const productsSection = document.getElementById('products-section');
//   if (productsSection) {
//       productsSection.scrollIntoView({ behavior: 'smooth' });
//   }
// }