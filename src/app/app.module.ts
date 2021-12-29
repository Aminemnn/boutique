import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


 

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ClientModule,
    AdminModule,
    AppRoutingModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }

