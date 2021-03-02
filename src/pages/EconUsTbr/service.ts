import request from '@/utils/request';
import type {
	UsTbrQueryParams,
} from './data.d';

export async function queryUsTbrListData(params?:UsTbrQueryParams){
	return request('/econ/tbr',{
		params
	});
}
