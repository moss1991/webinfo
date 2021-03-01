import React, { useState, useRef } from 'react';

import CpiList from './components/CpiList';

import type {
  CpiQueryParams,
  CpiItem,
 } from './data';

import {
  queryCpiList,
} from './service';

const CpiListPage:React.FC = ()=>{
  const [cpi_list , set_cpi_list ] = useState<CpiItem[]>([])
  const getFuturesBaseData = (params:CpiQueryParams)=>{
    queryCpiList(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_cpi_list(_data)
      }
    })
  }
  return (
    <CpiList cpilist_datasource={ cpi_list } queryData={ (params:CpiQueryParams) => {getFuturesBaseData(params)} }></CpiList>
  )
}

export default CpiListPage
