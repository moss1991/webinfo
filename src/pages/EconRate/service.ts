import request from '@/utils/request';
// import type {} from './data';

export async function queryRateList(){
  return request('/api/web/rate',{
    // params
  });
}
