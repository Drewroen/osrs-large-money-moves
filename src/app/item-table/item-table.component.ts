import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  buy: number;
  sell: number;
  volume: number;
}

const MOCK_ITEM_DATA: PeriodicElement[] = [
  { name: "Chaos Rune", buy: 20, sell: 25, volume: 18000 },
  { name: "Death Rune", buy: 100, sell: 105, volume: 25000 },
  { name: "Blood Rune", buy: 150, sell: 250, volume: 25000 },
  { name: "Twisted Bow", buy: 1000, sell: 20000000, volume: 10 },
  { name: "Purple Partyhat", buy: 20000, sell: 50000, volume: 100 },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'item-table-component',
  styleUrls: ['item-table.component.css'],
  templateUrl: 'item-table.component.html'
})
export class ItemTableComponent {
  displayedColumns: string[] = ['name', 'buy', 'sell', 'profit', 'volume'];
  dataSource = MOCK_ITEM_DATA;
}
