export type StockListItem = {
  ts_code : string;
  symbol : number;
  name : number;
  area :number;
  industry : number;
  fullname : number;
  enname : number;
  market : number;
  exchange : number;
  curr_type : number;
  list_status : number;
  list_date : number;
  delist_date : number;
  is_hs : number;
};

export type TradeCalendarItem = {
  exchange : string ;
  cal_date : string ;
  is_open  : string ;
  pretrade_date : string;
}

export type NameChangeItem = {
  ts_code : string;
  name : string;
  start_date : string;
  end_date : string;
  ann_date : string;
}

export type StockCompanyItem = {
  ts_code : string;
  hs_type : string;
  in_date : string;
  out_date : string;
  is_new : string;
}

export type StockCompaynItem = {
  ts_code : string;
  exchange : string;
  chairman : string;
  manager : string;
  secretary : string;
  reg_capital : string;
  setup_date : string;
  province : string;
  city : string;
  introduction : string;
  website : string;
  email : string;
  office : string;
  employees : string;
  main_business : string;
  business_scope : string;
}

export type TradeCalendarParam = {
  from_date?:string;
  to_date?:string;
}

export type NameChangeParam = {
  ts_code ?: string,
}

export type HsParam = {
  ts_type?:string;
}
