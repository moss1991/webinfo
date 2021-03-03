export type GdpItem = {
  quarter : string;
  gdp	: string;
  gdp_yoy : string;
  pi : string;
  pi_yoy : string;
  si : string;
  si_yoy : string;
  ti: string;
  ti_yoy: string;
}

export type GdpQueryParams = {
  q ?: string;
  start_q ?: string;
  end_q ?: string;
}
