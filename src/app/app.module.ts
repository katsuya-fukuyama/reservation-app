import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbaromponent } from './common/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  
  declarations: [
    AppComponent,
    Navbaromponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
