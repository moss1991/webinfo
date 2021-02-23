import request from '@/utils/request';
import type { TradeCalendarParam , NameChangeParam,HsParam } from './data.d';

export async function queryStockList(){
  return request('/stockinfo/list',{});
}

export async function queryTradeCalendarData(params?: TradeCalendarParam){
  return request('/stockinfo/tradecal',{
    params
  });
}

export async function queryNameChangeData(params?: NameChangeParam){
  return request('/stockinfo/namechange',{
    params
  });
}

export async function queryHsCompanyData(params?:HsParam){
  return request('/stockinfo/hs_const',{
    params
  })
}
