import request from '@/utils/request';
import type {
  MoneyQueryParams,
} from './data';

export async function queryMoneyList(params?:MoneyQueryParams){
  return request('/econ/money',{
    params
  });
}
