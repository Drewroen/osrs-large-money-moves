import { ItemPriceSummary } from 'src/app/interfaces/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculatorService {
  constructor() { }

  calculateSellPrice(itemPriceSummary: ItemPriceSummary): number {
    var sellPrices: number[] = this.recentPrices([...itemPriceSummary.highPriceSeries]);
    sellPrices.sort(function(a, b){return b-a});
    var percentileValue = Math.floor(sellPrices.length * .6);
    return sellPrices[percentileValue];
  }

  calculateBuyPrice(itemPriceSummary: ItemPriceSummary): number {
    var recentBuyPrices: number[] = this.recentPrices([...itemPriceSummary.lowPriceSeries]);
    recentBuyPrices.sort(function(a, b){return b-a});
    var recentPercentileValue = Math.floor(recentBuyPrices.length * .8);

    return recentBuyPrices[recentPercentileValue];
  }

  recentPrices(prices: number[]): number[] {
    return prices.slice(Math.ceil((5 * prices.length) / 6));
  }
}
