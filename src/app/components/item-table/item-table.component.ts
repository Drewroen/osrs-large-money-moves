import { Component, Input } from '@angular/core';
import { ItemSummary } from 'src/app/interfaces/item';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'item-table-component',
  styleUrls: ['item-table.component.css'],
  templateUrl: 'item-table.component.html',
})
export class ItemTableComponent {
  @Input() dataSource!: Map<number, ItemSummary>;
  displayedColumns: string[] = ['name', 'buy', 'sell', 'profit', 'graph'];

  dataToList() : ItemSummary[] {
    return Array.from(this.dataSource.values());
  }

  getItemSummaryForId(id: number): ItemSummary {
    return this.dataSource.get(id)!;
  }
}
