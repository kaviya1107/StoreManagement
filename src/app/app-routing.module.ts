import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailComponent } from './retail/retail.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'retail',component:RetailComponent},
  {path:'payment',component:PaymentComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
