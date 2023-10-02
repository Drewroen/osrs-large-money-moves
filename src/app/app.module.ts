import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemTableComponent } from './item-table/item-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
