import { GERepositoryService } from './services/ge-repository.service';
import { Component, OnInit } from '@angular/core';
import { ItemPriceSummary } from './interfaces/item';

const ITEMS_TO_TRACK = [
  2, // Cannonball
  21820, // Ether
  12934, // Scales
  562, // Chaos
  560, // Death
  565, // Blood
  566, // Soul
  449, // Adamantite Ore
  2361, // Adamantite Bar
  19582, // Dragon javelin heads
  21326, // Amethyst arrow
  892, // Rune arrow
  1513, // Magic log
  859, // Magic longbow
  855, // Yew longbow
  453, // Coal
  440, // Iron ore
  21880, // Wrath rune
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
