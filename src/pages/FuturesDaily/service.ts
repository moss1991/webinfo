import request from '@/utils/request';
import type {
  futuresDailyParams
} from './data.d';

export async function queryFuturesDaily(params?:futuresDailyParams){
  return request('/futuresinfo/daily',{
    params
  });
}
