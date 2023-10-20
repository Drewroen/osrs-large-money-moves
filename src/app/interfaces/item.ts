export interface ItemPriceSummary {
  id: number;
  name: string;
  fullHighPriceSeries: number[];
  fullLowPriceSeries: number[];
  recentHighPriceSeries: number[];
  recentLowPriceSeries: number[];
}

export interface ItemMappingSummary {
  id: number;
  name: string;
  iconUrl: string;
  limit: number;
}
