import request from '@/utils/request';
import type {
  CpiQueryParams,
} from './data.d';

export async function queryCpiList(params?:CpiQueryParams){
  return request('/cninfo/cpi',{
    params
  });
}
