export type futuresBaseItem = {
  ts_code: string;
  symbol: string;
  exchange: string;
  name: string;
  fut_code: string;
  multiplier: string;
  trade_unit: string;
  per_unit: string;
  quote_unit: string;
  quote_unit_desc: string;
  d_mode_desc:string;
  list_date:string;
  delist_date:string;
  d_month:string;
  last_ddate:string;
  trade_time_desc:string;
}

export type futuresQueryParams = {
  exchange?:string;
  fut_type?:string;
}

export type futuresDailyItem = {
  ts_code: string;
  trade_date: string;
  pre_close: string;
  pre_settle: string;
  open: string;
  high: string;
  low: string;
  close: string;
  settle: string;
  change1: string;
  change2: string;
  vol: string;
  amount: string;
  oi: string;
  oi_chg: string;
  delv_settle: string;
}

export type futuresDailyParams = {
  trade_date?: string;
  ts_code?: string;
  exchange?: string;
  start_date?: string;
  end_date?: string;
}

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
