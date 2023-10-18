import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemSummary } from '../interfaces/item';
import { OSRSWikiGetResponse } from '../interfaces/osrs-wiki';

@Injectable({
  providedIn: 'root',
})
export class GERepositoryService {
  public itemSummaries: Map<number, ItemSummary> = new Map<number, ItemSummary>();

  constructor(private http: HttpClient) {
  }

  async addItemToSummary(itemId: number): Promise<void> {
    this.http
      .get<OSRSWikiGetResponse>(
        `https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=5m&id=${itemId}`
      )
      .subscribe((response) => {
        var data = response.data;
        this.itemSummaries.set(itemId, {
          id: itemId,
          name: itemId.toString(),
          highPriceSeries: data.map(val => val.avgHighPrice),
          lowPriceSeries: data.map(val => val.avgLowPrice)
        });
      });
  }
}
