export type CpiItem = {
  month : string;
  nt_val	: string;
  nt_yoy : string;
  nt_mom : string;
  nt_accu : string;

  town_val : string;
  town_yoy : string;
  town_mom : string;
  town_accu: string;

  cnt_val : string;
  cnt_yoy : string;
  cnt_mom : string;
  cnt_accu : string;
}

export type CpiQueryParams = {
  m ?: string;
  start_m ?: string;
  end_m ?: string;
}
