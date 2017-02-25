import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgPipesModule} from 'angular2-pipes';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EntitylistComponent } from './entitylist/entitylist.component';
import { NavbarComponent } from './navbar/navbar.component';

import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContributionsComponent } from './contributions/contributions.component';

@NgModule({
  declarations: [
    AppComponent,
    EntitylistComponent,
    NavbarComponent,
    HomeComponent,
    ContactformComponent,
    ContributionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgPipesModule,
    MaterialModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
