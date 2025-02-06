import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports:[CommonModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone:true,
})
export class NavbarComponent {


  isCartOpen = false; 
  cartItems: any[] = []; 

  

  toggleCart():void {
    this.isCartOpen = !this.isCartOpen
  }


  
}




