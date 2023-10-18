import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemMappingSummary, ItemPriceSummary } from '../interfaces/item';
import {
  OSRSWikiItemMapping,
  OSRSWikiItemTimeseries,
} from '../interfaces/osrs-wiki';

@Injectable({
  providedIn: 'root',
})
export class GERepositoryService {
  public itemPriceSummaries: Map<number, ItemPriceSummary> = new Map<
    number,
    ItemPriceSummary
  >();
  public itemMapping: Map<number, ItemMappingSummary> = new Map<
    number,
    ItemMappingSummary
  >();

  constructor(private http: HttpClient) {}

  async addItemToSummary(itemId: number): Promise<void> {
    this.http
      .get<OSRSWikiItemTimeseries>(
        `https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=5m&id=${itemId}`
      )
      .subscribe((response) => {
        var data = response.data;
        this.itemPriceSummaries.set(itemId, {
          id: itemId,
          name: itemId.toString(),
          highPriceSeries: data.map((val) => val.avgHighPrice),
          lowPriceSeries: data.map((val) => val.avgLowPrice),
        });
      });
  }

  async createItemMapping(): Promise<void> {
    this.http
      .get<OSRSWikiItemMapping[]>(
        `https://prices.runescape.wiki/api/v1/osrs/mapping`
      )
      .subscribe((response) => {
        response.forEach((val) => {
          this.itemMapping.set(val.id, {
            name: val.name,
            id: val.id,
            iconUrl:
              'https://oldschool.runescape.wiki/images/' +
              val.icon.replaceAll(' ', '_'),
          });
        });
      });
  }
}
