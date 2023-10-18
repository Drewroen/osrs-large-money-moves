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
  constructor(public geRepositoryService: GERepositoryService, public priceCalculatorService: PriceCalculatorService) {}

  @Input() dataSource!: Map<number, ItemPriceSummary>;
  displayedColumns: string[] = ['name', 'buy', 'sell', 'profit', 'graph'];

  dataToList() : ItemPriceSummary[] {
    return Array.from(this.dataSource.values());
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
    return this.priceCalculatorService.calculateBuyPrice(this.geRepositoryService.itemPriceSummaries.get(id)!);
  }

  getSellPrice(id: number): number {
    return this.priceCalculatorService.calculateSellPrice(this.geRepositoryService.itemPriceSummaries.get(id)!);
  }

  getProfit(id: number): number {
    return this.getSellPrice(id) - this.getBuyPrice(id) - Math.floor(this.getSellPrice(id) * .01);
  }
}
