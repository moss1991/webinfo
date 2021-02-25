import React, { useState, useRef } from 'react';
import FuturesMapping from './components/FuturesMapping'

import type {
  FutureMappingParams,
  FutureMappingItem,
 } from './data';

import {
  queryFuturesMappingData
} from './service';


const FuturesMappingPage: React.FC = () => {
  const [ futures_mapping , set_futures_mapping ] = useState<FutureMappingItem[]>([])

  const getFuturesMappingData = (params:FutureMappingParams)=>{
    queryFuturesMappingData(params).then((res)=>{
      console.log(res)
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_mapping(_data)
      }
    })
  }

  return (
    <FuturesMapping
      mapping_data_source={ futures_mapping }
      queryData={(params:FutureMappingParams)=>{ getFuturesMappingData(params)}}></FuturesMapping>
  )
}

export default FuturesMappingPage;
