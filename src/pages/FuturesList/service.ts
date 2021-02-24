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

export async function queryFuturesWsrData(params?:FuturesWsrParams){
  return request('/futuresinfo/wsr',{
    params
  });
}

export async function queryFuturesSettleData(params?:FuturesSettleParams){
  return request('/futuresinfo/settle',{
    params
  })
}

export async function queryFuturesIndexData(params?:FuturesIndexDailyParams){
  return request('/futuresinfo/index',{
    params
  })
}

export async function queryFuturesMappingData(params?:FutureMappingParams){
  return request('/futuresinfo/mapping',{
    params
  })
}

export async function queryFuturesWeeklyDetailData(params?:FutureWeeklyDetailParams){
  return request('/futuresinfo/wdetail',{
    params
  })
}
