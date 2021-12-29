import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulegestprodRoutingModule } from './modulegestprod-routing.module';
import { ModulegestprodComponent } from './modulegestprod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductaddComponent } from './productadd/productadd.component';


@NgModule({
  declarations: [
    ModulegestprodComponent,
    ProductaddComponent,
    
  ],
  imports: [
    CommonModule,
    ModulegestprodRoutingModule,
    ReactiveFormsModule
    
  
  ],
  exports: [
    ModulegestprodComponent,
    
  ]
})
export class ModulegestprodModule { 


 }
