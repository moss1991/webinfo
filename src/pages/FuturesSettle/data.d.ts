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
