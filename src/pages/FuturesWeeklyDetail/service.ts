import request from '@/utils/request';
import type {
  FutureWeeklyDetailParams
} from './data.d';

export async function queryFuturesWeeklyDetailData(params?:FutureWeeklyDetailParams){
  return request('/futures/wdetail',{
    params
  })
}
