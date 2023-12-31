import { PriceCalculatorService } from './../../services/price-calculator.service';
import { ItemPriceSummary } from './../../interfaces/item';
import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'price-graph-component',
  templateUrl: './price-graph.component.html',
  styleUrls: ['./price-graph.component.css']
})
export class PriceGraphComponent {
  constructor(public priceCalculatorService: PriceCalculatorService) {}

  Highcharts: typeof Highcharts = Highcharts;
  @Input() itemPriceSummary!: ItemPriceSummary;
  updateFlag: boolean = false;

  ngOnChanges() {
    this.chartOptions.series = [
      {
        type: 'line',
        data: this.itemPriceSummary.fullHighPriceSeries,
        name: "High",
        enableMouseTracking: false,
        opacity: .3
      },
      {
        type: 'line',
        data: this.itemPriceSummary.fullLowPriceSeries,
        name: "Low",
        enableMouseTracking: false,
        opacity: .3
      },
      {
        type: 'line',
        data: this.generateSellLineSeries(),
        name: "Sell",
      },
      {
        type: 'line',
        data: this.generateBuyLineSeries(),
        name: "Buy"
      },
    ]
    this.updateFlag = true;
  }

  generateSellLineSeries(): number[] {
    var sellPrice = this.priceCalculatorService.calculateSellPrice(this.itemPriceSummary);
    return Array<number>(this.itemPriceSummary.fullHighPriceSeries.length).fill(sellPrice);
  }

  generateBuyLineSeries(): number[] {
    var buyPrice = this.priceCalculatorService.calculateBuyPrice(this.itemPriceSummary);
    return Array<number>(this.itemPriceSummary.fullLowPriceSeries.length).fill(buyPrice);
  }

  defaultHighchartsOptions(): Highcharts.Options {
    return {
      series: [],
      xAxis: {
        visible: false
      },
      yAxis: {
        title: {
          text: ""
        },
        tickInterval: 2,
        labels: {
          style: {
            fontSize: "10"
          }
        }
      },
      legend: {
        enabled: false
      },
      title: {
        text: ""
      },
      chart: {
        height: 75,
        width: 200
      },
      credits: {
        enabled: false
      }
    };
  }



  chartOptions: Highcharts.Options = this.defaultHighchartsOptions();

}
