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
