import { NavbarComponent } from './core/components/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './pages/main-layout/home/home.component';
import { ProductsComponent } from './pages/main-layout/products/products.component';
// import { HomeComponent } from './pages/main-layout/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavbarComponent , FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}


