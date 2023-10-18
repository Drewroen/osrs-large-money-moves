import { ItemPriceSummary } from 'src/app/interfaces/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculatorService {
  constructor() { }

  calculateSellPrice(itemPriceSummary: ItemPriceSummary): number {
    var sellPrices: number[] = [...itemPriceSummary.highPriceSeries];
    sellPrices.sort();
    var percentileValue = Math.floor(sellPrices.length * .6);
    return sellPrices[percentileValue];
  }

  calculateBuyPrice(itemPriceSummary: ItemPriceSummary): number {
    var buyPrices: number[] = [...itemPriceSummary.lowPriceSeries];
    buyPrices.sort();
    var percentileValue = Math.floor(buyPrices.length * .2);
    return buyPrices[percentileValue];
  }
}
