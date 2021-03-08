import request from '@/utils/request';
import type {
  FuturesHoldingParams,
} from './data.d';

export async function queryFuturesHolding(params?:FuturesHoldingParams){
  return request('/api/futures/holding',{
    params
  });
}
