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
