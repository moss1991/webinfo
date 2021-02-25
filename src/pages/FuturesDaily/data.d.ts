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
