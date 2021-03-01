import React, { useState, useRef } from 'react';

import PpiList from './components/PpiList';

import type {
  PpiQueryParams,
  PpiItem,
 } from './data';

import {
  queryPpiList,
} from './service';

const PpiListPage:React.FC = ()=>{
  const [ppi_list , set_ppi_list ] = useState<PpiItem[]>([])
  const getFuturesBaseData = (params:PpiQueryParams)=>{
    queryPpiList(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_ppi_list(_data)
      }
    })
  }
  return (
    <PpiList ppilist_datasource={ ppi_list } queryData={ (params:PpiQueryParams) => {getFuturesBaseData(params)} }></PpiList>
  )
}

export default PpiListPage
