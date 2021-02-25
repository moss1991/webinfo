export type FuturesHoldingItem = {
  trade_date : string;
  symbol : string;
  broker : string;
  vol : string;
  vol_chg : string;
  long_hld : string;
  long_chg : string;
  short_hld : string;
  short_chg : string;
  exchange : string;
}

export type FuturesHoldingParams = {
  trade_date : string;
  symbol : string;
  start_date : string;
  end_date : string;
  exchange : string;
}
