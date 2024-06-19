import { Component, Input } from '@angular/core';
import { ItemMappingSummary, ItemPriceSummary } from 'src/app/interfaces/item';
import { GERepositoryService } from 'src/app/services/ge-repository.service';
import { PriceCalculatorService } from 'src/app/services/price-calculator.service';

@Component({
  selector: 'item-table-component',
  styleUrls: ['item-table.component.css'],
  templateUrl: 'item-table.component.html',
})
export class ItemTableComponent {
  constructor(
    public geRepositoryService: GERepositoryService,
    public priceCalculatorService: PriceCalculatorService
  ) {}

  @Input() dataSource!: Map<number, ItemPriceSummary>;
  displayedColumns: string[] = [
    'name',
    'buy',
    'sell',
    'limit',
    'total_profit',
    'roi',
    'graph',
  ];

  dataToList(): ItemPriceSummary[] {
    return Array.from(this.dataSource.values()).sort((a, b) => {
      var aProfit = this.getROI(a.id);
      var bProfit = this.getROI(b.id);
      if (!aProfit) return 1;
      if (!bProfit) return -1;
      return aProfit < bProfit ? 1 : -1;
    });
  }

  getItemSummaryFromId(id: number): ItemPriceSummary {
    return this.dataSource.get(id)!;
  }

  getMappingFromId(id: number): ItemMappingSummary {
    return this.geRepositoryService.itemMapping.get(id)!;
  }

  getNameFromId(id: number): string {
    return this.geRepositoryService.itemMapping.get(id)!.name;
  }

  getBuyPrice(id: number): number {
    return this.priceCalculatorService.calculateBuyPrice(
      this.geRepositoryService.itemPriceSummaries.get(id)!
    );
  }

  getSellPrice(id: number): number {
    return this.priceCalculatorService.calculateSellPrice(
      this.geRepositoryService.itemPriceSummaries.get(id)!
    );
  }

  getProfit(id: number): number | undefined {
    var limit = this.getMappingFromId(id).limit;
    if (!this.getSellPrice(id) || !this.getBuyPrice(id)) return undefined;
    var profitPerItem =
      this.getSellPrice(id) -
      this.getBuyPrice(id) -
      Math.floor(this.getSellPrice(id) * 0.01);
    return limit * profitPerItem;
  }

  getROI(id: number): number | undefined {
    var profit = this.getProfit(id);
    var limit = this.getMappingFromId(id).limit;
    var buyPrice = this.getBuyPrice(id);
    if (!profit) return undefined;
    var roi = profit / (limit * buyPrice);
    return Math.round(roi * 10000) / 100;
  }
}
