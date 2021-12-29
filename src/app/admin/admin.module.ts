import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ModulegestprodModule } from './modulegestprod/modulegestprod.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModulegestprodModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { 
  
}
