import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulegestprodComponent } from './modulegestprod/modulegestprod.component';
import { ProductaddComponent } from './modulegestprod/productadd/productadd.component';

const routes: Routes = [ {path :'gestprod',component:ModulegestprodComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
