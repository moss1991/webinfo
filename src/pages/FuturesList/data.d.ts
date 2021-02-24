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

export type FuturesWsrParams = {
  trade_date : string;
  symbol: string;
  start_date: string;
  end_date: string;
  exchange: string;
}

export type FuturesWsrItem = {
  trade_date: string;
  symbol: string;
  fut_name: string;
  warehouse: string;
  wh_id: string;
  pre_vol: string;
  vol: string;
  vol_chg: string;
  area: string;
  year: string;
  grade: string;
  brand: string;
  place: string;
  pd: string;
  is_ct: string;
  unit: string;
  exchange: string;
}

// 结算参数
export type FuturesSettleParams = {
  trade_date : string;
  ts_code : string;
  start_date : string;
  end_date : string;
  exchange : string;
}

export type FuturesSettleItem = {
  ts_code : string;
  trade_date : string;
  settle : string;
  trading_fee_rate : string;
  trading_fee : string;
  delivery_fee : string;
  b_hedging_margin_rate : string;
  s_hedging_margin_rate : string;
  long_margin_rate : string;
  short_margin_rate : string;
  offset_today_fee : string;
  offset_today_fee : string;
}
// 南华期货指数日线行情
export type FuturesIndexDailyParams = {
  ts_code: string;
  trade_date: string;
  start_date: string;
  end_date: string;
}

export type FuturesIndexDailyItem = {
  ts_code: string;
  trade_date: string;
  close: string;
  open: string;
  high: string;
  low: string;
  pre_close: string;
  change: string;
  pct_chg: string;
  vol: string;
  amount: string;
}
// 期货主力与连续合约
export type FutureMappingParams = {
  ts_code	: string;
  trade_date : string;
  start_date : string;
  end_date : string;
}

export type FutureMappingItem = {
  ts_code	: string;
  trade_date : string;
  mapping_ts_code	: string;
}

// 期货主力与连续合约
export type FutureWeeklyDetailParams = {
  week : string;
  prd	: string;
  start_week : string;
  end_week : string;
  exchange : string;
}

export type FutureWeeklyDetailItem = {
  exchange : string;
  prd	: string;
  name : string;
  vol : string;
  vol_yoy : string;
  amount: string;
  amout_yoy: string;
  cumvol: string;
  cumvol_yoy: string;
  cumamt: string;
  cumamt_yoy: string;
  open_interest: string;
  interest_wow: string;
  mc_close: string;
  close_wow: string;
  week: string;
  week_date: string;
}
