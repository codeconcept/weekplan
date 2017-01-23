import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
import {CrudLocalstorageService } from './services/crud-localstorage.service';
import { AddFormComponent } from './add-form/add-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule
  ],
  providers: [ CrudLocalstorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
