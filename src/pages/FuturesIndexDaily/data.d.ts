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
