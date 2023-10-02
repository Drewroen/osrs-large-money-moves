import { ItemSummary } from './item-table/item-table.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PriceDataPoint {
  timestamp: number;
  avgHighPrice: number;
  avgLowPrice: number;
}

export interface OSRSWikiGetResponse {
  data: Array<PriceDataPoint>;
}

@Injectable({
  providedIn: 'root',
})
export class GERepositoryService {
  public priceHistory: Map<number, Array<PriceDataPoint>>;

  constructor(private http: HttpClient) {
    this.priceHistory = new Map<number, Array<PriceDataPoint>>([]);
  }

  async getItemData(itemId: number): Promise<void> {
    this.http
      .get<OSRSWikiGetResponse>(
        `https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=5m&id=${itemId}`
      )
      .subscribe((response) => {
        this.priceHistory.set(itemId, response.data);
        console.log(this.priceHistory);
      });
  }

  itemSummary(): ItemSummary[] {
    console.log(this.priceHistory);
    const response: ItemSummary[] = [];
    this.priceHistory.forEach((value, key) => {
      response.push({
        name: key.toString(),
        buy: value[0].avgLowPrice,
        sell: value[0].avgHighPrice,
        volume: 0,
      });
    });
    response.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    return response;
  }
}
