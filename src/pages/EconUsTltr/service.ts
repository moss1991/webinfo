import request from '@/utils/request';
import type {
	UsTltrQueryParams,
} from './data.d';

export async function queryUsTltrListData(params?:UsTltrQueryParams){
	return request('/econ/tltr',{
		params
	});
}
