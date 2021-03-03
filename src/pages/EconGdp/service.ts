import request from '@/utils/request';
import type {
  GdpQueryParams,
} from './data';

export async function queryGdpList(params?:GdpQueryParams){
  return request('/econ/gdp',{
    params
  });
}
