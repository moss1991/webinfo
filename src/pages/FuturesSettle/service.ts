import request from '@/utils/request';
import type {
  FuturesSettleParams,
} from './data.d';

export async function queryFuturesSettleData(params?:FuturesSettleParams){
  return request('/api/futures/settle',{
    params
  })
}
