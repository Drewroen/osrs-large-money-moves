export interface OSRSWikiItemTimeseriesDatapoint {
  timestamp: number;
  avgHighPrice: number;
  avgLowPrice: number;
}

export interface OSRSWikiItemTimeseries {
  data: Array<OSRSWikiItemTimeseriesDatapoint>;
}

export interface OSRSWikiItemMapping {
  id: number;
  name: string;
  icon: string;
}
