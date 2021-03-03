import request from '@/utils/request';
import type {
  FuturesIndexDailyParams,
} from './data.d';

export async function queryFuturesIndexData(params?:FuturesIndexDailyParams){
  return request('/futures/index',{
    params
  })
}
