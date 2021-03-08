import request from '@/utils/request';
import type { HaiguanQueryParams } from './data';

export async function queryHaiguanLimitList(params:HaiguanQueryParams){
  return request('/api/haiguan/limit',{
    params
  });
}

export async function queryHaiguanSum(){
  return request('/api/haiguan/all',{

  });
}
