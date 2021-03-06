import request from '@/utils/request';
import type {
  FutureMappingParams,
} from './data.d';

export async function queryFuturesMappingData(params?:FutureMappingParams){
  return request('/api/futures/mapping',{
    params
  })
}
