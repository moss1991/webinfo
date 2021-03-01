import request from '@/utils/request';
import type {
  GdpQueryParams,
} from './data.d';

export async function queryGdpList(params?:GdpQueryParams){
  return request('/cninfo/gdp',{
    params
  });
}
