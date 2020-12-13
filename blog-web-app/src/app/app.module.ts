import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BlogTableComponent, DialogElementsExampleDialog } from './blog-table/blog-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBlogComponent } from './create-blog/create-blog.component';

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    BlogTableComponent,
    DialogElementsExampleDialog,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
