import { GERepositoryService } from './services/ge-repository.service';
import { Component, OnInit } from '@angular/core';
import { ItemPriceSummary } from './interfaces/item';

const ITEMS_TO_TRACK = [
  562, // Chaos rune
  565, // Blood rune
  560, // Death rune
  12934, // Zulrah's scales
  21820, // Revenant ether
  2, // Cannonball
  453, // Coal
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public geRepositoryService: GERepositoryService) {}

  async ngOnInit() {
    await this.geRepositoryService.createItemMapping();
    ITEMS_TO_TRACK.forEach(async val => {
      await this.geRepositoryService.addItemToSummary(val);
    })
  }

  getItemSummaries(): Map<number, ItemPriceSummary> {
    return this.geRepositoryService.itemPriceSummaries;
  }
}
