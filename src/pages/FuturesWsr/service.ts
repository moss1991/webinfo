import request from '@/utils/request';
import type {
  FuturesWsrParams,
} from './data.d';

export async function queryFuturesWsrData(params?:FuturesWsrParams){
  return request('/api/futures/wsr',{
    params
  });
}
