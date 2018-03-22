import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//import material module
import  { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import  { MatLoginComponent } from './mat-login/mat-login.component';


@NgModule({
  declarations: [
    AppComponent,
    MatLoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
