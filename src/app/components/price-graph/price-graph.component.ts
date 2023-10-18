import { Component, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ItemSummary } from 'src/app/interfaces/item';

@Component({
  selector: 'price-graph-component',
  templateUrl: './price-graph.component.html',
  styleUrls: ['./price-graph.component.css']
})
export class PriceGraphComponent {
  Highcharts: typeof Highcharts = Highcharts;
  @Input()
  itemSummary!: ItemSummary;
  updateFlag: boolean = false;

  ngOnChanges() {
    console.log(this.itemSummary.highPriceSeries);
    this.chartOptions.series = [
      {
        type: 'line',
        data: this.itemSummary.highPriceSeries,
        name: "High"
      },
      {
        type: 'line',
        data: this.itemSummary.lowPriceSeries,
        name: "Low"
      },
    ]
    this.updateFlag = true;
  }

  defaultHighchartsOptions(): Highcharts.Options {
    console.log(this.itemSummary);
    return {
      series: [
        {
          type: 'line',
          data: [],
        },
      ],
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
            fontSize: "8"
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
        height: 100,
        width: 500
      },
      credits: {
        enabled: false
      }
    };
  }

  chartOptions: Highcharts.Options = this.defaultHighchartsOptions();

}
