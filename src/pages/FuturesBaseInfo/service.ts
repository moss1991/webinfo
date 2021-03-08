import request from '@/utils/request';
import type {
  futuresQueryParams,
} from './data.d';

export async function queryFuturesBaseData(params?:futuresQueryParams){
  return request('/api/futures/base',{
    params
  });
}
