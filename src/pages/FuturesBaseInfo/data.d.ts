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
