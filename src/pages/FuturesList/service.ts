import request from '@/utils/request';
import type {
  futuresQueryParams,
  futuresDailyParams,
  FuturesHoldingParams,
  FuturesWsrParams,
  FuturesSettleParams,
  FuturesIndexDailyParams,
  FutureMappingParams,
  FutureWeeklyDetailParams
} from './data.d';

export async function queryFuturesBaseData(params?:futuresQueryParams){
  return request('/futures/base',{
    params
  });
}

export async function queryFuturesDaily(params?:futuresDailyParams){
  return request('/futures/daily',{
    params
  });
}

export async function queryFuturesHolding(params?:FuturesHoldingParams){
  return request('/futures/holding',{
    params
  });
}

export async function queryFuturesWsrData(params?:FuturesWsrParams){
  return request('/futures/wsr',{
    params
  });
}

export async function queryFuturesSettleData(params?:FuturesSettleParams){
  return request('/futures/settle',{
    params
  })
}

export async function queryFuturesIndexData(params?:FuturesIndexDailyParams){
  return request('/futures/index',{
    params
  })
}

export async function queryFuturesMappingData(params?:FutureMappingParams){
  return request('/futures/mapping',{
    params
  })
}

export async function queryFuturesWeeklyDetailData(params?:FutureWeeklyDetailParams){
  return request('/futures/wdetail',{
    params
  })
}
