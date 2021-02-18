import request from '@/utils/request';

// import { XinguanListItem } from './data.d';

export async function queryRule(){
  return request('https://interface.sina.cn/news/wap/fymap2020_data.d.json',{});
}
