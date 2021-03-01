import request from '@/utils/request';
import type {
  MoneyQueryParams,
} from './data.d';

export async function queryMoneyList(params?:MoneyQueryParams){
  return request('/cninfo/money',{
    params
  });
}
