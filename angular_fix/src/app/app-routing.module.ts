import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProdutsComponent } from './components/create-produts/create-produts.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  {path:'', component:ListProductsComponent},
  {path:'create-product', component:CreateProdutsComponent},
  {path:'edit-product/:id', component:CreateProdutsComponent},
  {path:'**', redirectTo:'',pathMatch:'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
