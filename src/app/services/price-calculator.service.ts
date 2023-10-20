import { ItemPriceSummary } from 'src/app/interfaces/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculatorService {
  constructor() { }

  calculateSellPrice(itemPriceSummary: ItemPriceSummary): number {
    var sellPrices: number[] = [...itemPriceSummary.fullHighPriceSeries];
    sellPrices.sort(function(a, b){return b-a});
    var percentileValue = Math.floor(sellPrices.length * .5);
    return sellPrices[percentileValue];
  }

  calculateBuyPrice(itemPriceSummary: ItemPriceSummary): number {
    var buyPrices: number[] = [...itemPriceSummary.fullLowPriceSeries];
    buyPrices.sort(function(a, b){return b-a});
    var percentileValue = Math.floor(buyPrices.length * .7);

    return buyPrices[percentileValue];
  }

  // goodMerch(ItemPriceSummary: ItemPriceSummary): boolean {
  //   var buyPrice = this.calculateBuyPrice(ItemPriceSummary);
  // }

  recentPrices(prices: number[]): number[] {
    return prices.slice(Math.ceil((5 * prices.length) / 6));
  }
}
