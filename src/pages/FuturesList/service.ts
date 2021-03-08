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
  return request('/api/futures/base',{
    params
  });
}

export async function queryFuturesDaily(params?:futuresDailyParams){
  return request('/api/futures/daily',{
    params
  });
}

export async function queryFuturesHolding(params?:FuturesHoldingParams){
  return request('/api/futures/holding',{
    params
  });
}

export async function queryFuturesWsrData(params?:FuturesWsrParams){
  return request('/api/futures/wsr',{
    params
  });
}

export async function queryFuturesSettleData(params?:FuturesSettleParams){
  return request('/api/futures/settle',{
    params
  })
}

export async function queryFuturesIndexData(params?:FuturesIndexDailyParams){
  return request('/api/futures/index',{
    params
  })
}

export async function queryFuturesMappingData(params?:FutureMappingParams){
  return request('/api/futures/mapping',{
    params
  })
}

export async function queryFuturesWeeklyDetailData(params?:FutureWeeklyDetailParams){
  return request('/api/futures/wdetail',{
    params
  })
}
