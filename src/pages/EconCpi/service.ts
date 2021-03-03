import request from '@/utils/request';
import type {
  CpiQueryParams,
} from './data';

export async function queryCpiList(params?:CpiQueryParams){
  return request('/econ/cpi',{
    params
  });
}
