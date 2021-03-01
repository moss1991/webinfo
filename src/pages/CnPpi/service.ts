import request from '@/utils/request';
import type {
  PpiQueryParams,
} from './data.d';

export async function queryPpiList(params?:PpiQueryParams){
  return request('/cninfo/ppi',{
    params
  });
}
