export interface OSRSWikiPricePoint {
  timestamp: number;
  avgHighPrice: number;
  avgLowPrice: number;
}

export interface OSRSWikiGetResponse {
  data: Array<OSRSWikiPricePoint>;
}
