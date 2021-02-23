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
  const [item, setItem] = useState<XinguanListItem[]>([]);

  let getData = ()=>{
    queryData().then((res)=>{
      console.log(res)
      if(res.code == 200){
        setItem( res.data )
      }
    });
  }

  getData()

  return (
    <div>
      <XinguanList dataSource={ item }></XinguanList>
    </div>
  );
}

export default DemoList;
