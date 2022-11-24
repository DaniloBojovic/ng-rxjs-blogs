import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { BlogsFilterComponent } from './blogs-filter/blogs-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, HomeComponent, BlogsListComponent, HeaderComponent, BlogsFilterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DataViewModule, FormsModule, ReactiveFormsModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
