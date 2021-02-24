import request from '@/utils/request';
import type {futuresQueryParams , futuresDailyParams, FuturesHoldingParams } from './data.d';

export async function queryFuturesBaseData(params?:futuresQueryParams){
  return request('/futuresinfo/base',{
    params
  });
}

export async function queryFuturesDaily(params?:futuresDailyParams){
  return request('/futuresinfo/daily',{
    params
  });
}

export async function queryFuturesHolding(params?:FuturesHoldingParams){
  return request('/futuresinfo/holding',{
    params
  });
}
