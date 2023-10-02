import { ItemSummary } from './item-table/item-table.component';
import { GERepositoryService } from './ge-repository.service';
import { Component, OnInit } from '@angular/core';

const ITEMS_TO_TRACK = [
  2, // Cannonball
  21820, // Ether
  12934, // Scales
  562, // Chaos
  560, // Death
  565, // Blood
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public geRepositoryService: GERepositoryService) {}

  async ngOnInit() {
    ITEMS_TO_TRACK.forEach(async val => {
      await this.geRepositoryService.getItemData(val);
    })
  }

  getSummary(): ItemSummary[] {
    return this.geRepositoryService.itemSummary();
  }
}
