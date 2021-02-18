import React, { useState, useRef } from 'react';
import DataList from './components/Demo'
import XinguanList from './components/Xinguan'


import request from '@/utils/request';
import { XinguanListItem } from './data'

async function queryData(){
  return request('/webinfo/all',{});
  // return request('http://127.0.0.1:8081/webinfo/all',{});
}

const DemoList: React.FC = () => {
  let mdata:Array<XinguanListItem>
  mdata = [
    // {
    //   "name": "中国",
    //   "value": "90498",
    //   "susNum": "3",
    //   "deathNum": "4735",
    //   "cureNum": "85252",
    //   "econNum": "511"
    // }
  ];

  let getData = ()=>{
    queryData().then((res)=>{
      console.log(111)
      //调用了
      if(res.code == 200){
        //here 还是不行
        mdata = res.data;
      }
    });
  }

  getData()

  return (
    <div>
      <DataList></DataList>
      <XinguanList dataSource={ mdata }></XinguanList>
    </div>
  );
}

export default DemoList;
