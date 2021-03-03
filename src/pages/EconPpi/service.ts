import request from '@/utils/request';
import type {
  PpiQueryParams,
} from './data';

export async function queryPpiList(params?:PpiQueryParams){
  return request('/econ/ppi',{
    params
  });
}
