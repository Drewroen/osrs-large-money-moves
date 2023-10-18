import { HighchartsChartModule } from 'highcharts-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { PriceGraphComponent } from './components/price-graph/price-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTableComponent,
    PriceGraphComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
