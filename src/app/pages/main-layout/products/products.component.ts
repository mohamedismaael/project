import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class  ProductsComponent {
  @Input() product = {
    image:'',
    title:'',
    price:0,
    id:0
  };

}
