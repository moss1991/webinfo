import React, { useState, useRef } from 'react';

import GdpList from './components/GdpList';

import type {
  GdpQueryParams,
  GdpItem,
 } from './data';

import {
  queryGdpList,
} from './service';

const GdpListPage:React.FC = ()=>{
  const [gdp_list , set_gdp_list ] = useState<GdpItem[]>([])
  const getFuturesBaseData = (params:GdpQueryParams)=>{
    queryGdpList(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_gdp_list(_data)
      }
    })
  }
  return (
    <GdpList gdplist_datasource={gdp_list} queryData={ (params:GdpQueryParams) => {getFuturesBaseData(params)} }></GdpList>
  )
}

export default GdpListPage
