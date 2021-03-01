export type MoneyItem = {
  month: string;
  m0: string;
  m0_yoy: string;
  m0_mom: string;
  m1: string;
  m1_yoy: string;
  m1_mom: string;
  m2: string;
  m2_yoy: string;
  m2_mom: string;
}

export type MoneyQueryParams = {
  m ?: string;
  start_m ?: string;
  end_m ?: string;
}
