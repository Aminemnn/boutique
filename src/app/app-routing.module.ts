import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './client/about/about.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';

const routes: Routes = [ {path : 'App',component:AppComponent,children:[
   {path: 'home', component:HomeComponent},
   {path:'client',component:ClientComponent},
   {path:'about',component:AboutComponent},
   {path:'adminhome',component:AdminComponent}
]},
{path:'',redirectTo:'/home/homebanner',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

