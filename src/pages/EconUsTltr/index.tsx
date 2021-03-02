import React, { useState, useRef } from 'react';
import UsTltrList from './components/UsTltrList'
import type {
	UsTltrQueryParams,
	UsTltrItem ,
} from './data';

import {
	queryUsTltrListData,
} from './service';

const UsTltrListPage: React.FC = () => {
  const [ UsTltr, set_UsTltr ] = useState<UsTltrItem[]>([])
  const getUsTltrListData = (params:UsTltrQueryParams)=>{
    queryUsTltrListData(params).then((res)=>{
      console.log(res)
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_UsTltr(_data)
      }
    })
  }
  return (
  <UsTltrList
    datasource={ UsTltr }
    queryData={(params:UsTltrQueryParams)=>{ getUsTltrListData(params)}}></UsTltrList>
  )
}
export default UsTltrListPage;
