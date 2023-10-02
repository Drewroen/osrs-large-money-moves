import { Component, Input } from '@angular/core';

export interface ItemSummary {
  name: string;
  buy: number;
  sell: number;
  volume: number;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'item-table-component',
  styleUrls: ['item-table.component.css'],
  templateUrl: 'item-table.component.html',
})
export class ItemTableComponent {
  @Input() dataSource!: ItemSummary[];
  displayedColumns: string[] = ['name', 'buy', 'sell', 'profit', 'volume'];
}
