export type HaiguanItem = {
  id : string;
  product_id : string;
  product_name : string;
  trade_country_id : string;
  trade_country_name : string;
  trade_id : string;
  trade_name : string;
  register_id : string;
  register_name : string;
  first_unit : string;
  first_price : string;
  second_unit : string;
  second_price : string;
  price : string;
  year : string;
  start_month : string;
  end_month : string;
  import_type : string;
  code_type : string;
  month_type : string;
  create_time : string;
}

export type HaiguanQueryParams = {
  page : Int;
  pagesize : Int;
}
