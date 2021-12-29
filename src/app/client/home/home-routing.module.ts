import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { HomeComponent } from './home.component';

const routes: Routes = [ {path:'home',component:HomeComponent,children:[
  {path:'homeprod',component:HomeProductComponent},
   {path:'homebanner',component:HomeBannerComponent},
  {path:'homeproddetail',component:HomeProductDetailComponent}]} 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
