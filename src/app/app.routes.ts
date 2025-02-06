import { Routes } from '@angular/router';
import { HomeComponent } from './pages/main-layout/home/home.component';
import { ProductComponent } from './pages/main-layout/product/product.component';
export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'product/:id', component: ProductComponent}
];
