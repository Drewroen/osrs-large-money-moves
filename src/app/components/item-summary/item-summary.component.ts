import { Component, Input } from '@angular/core';
import { ItemMappingSummary, ItemPriceSummary } from 'src/app/interfaces/item';
import { GERepositoryService } from 'src/app/services/ge-repository.service';
import { PriceCalculatorService } from 'src/app/services/price-calculator.service';

@Component({
  selector: 'item-summary-component',
  templateUrl: './item-summary.component.html',
  styleUrls: ['./item-summary.component.css'],
})
export class ItemSummaryComponent {
  constructor(
    public geRepositoryService: GERepositoryService,
    public priceCalculatorService: PriceCalculatorService
  ) {}

  @Input() dataSource!: Map<number, ItemPriceSummary>;
  displayedColumns: string[] = ['name', 'buy', 'sell', 'amount'];

  dataToList(): ItemPriceSummary[] {
    return Array.from(this.dataSource.values());
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

  ngOnChanges() {}
}
