import React, { useState, useRef } from 'react';
import UsTbrList from './components/UsTbrList'
import type {
	UsTbrQueryParams,
	UsTbrItem ,
} from './data';

import {
	queryUsTbrListData,
} from './service';

const UsTbrListPage: React.FC = () => {
  const [ UsTbr, set_UsTbr ] = useState<UsTbrItem[]>([])
  const getUsTbrListData = (params:UsTbrQueryParams)=>{
    queryUsTbrListData(params).then((res)=>{
      console.log(res)
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_UsTbr(_data)
      }
    })
  }
  return (
  <UsTbrList
    datasource={ UsTbr }
    queryData={(params:UsTbrQueryParams)=>{ getUsTbrListData(params)}}></UsTbrList>
  )
}
export default UsTbrListPage;
