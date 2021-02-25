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
