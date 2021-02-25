import React, { useState, useRef } from 'react';

import FuturesIndexDaily from './components/FuturesIndexDaily'

import type {
  FuturesIndexDailyParams,
  FuturesIndexDailyItem,
 } from './data';
import {
  queryFuturesIndexData,
} from './service';

const FuturesIndexDailyPage: React.FC = () => {
  const [ futures_index_daily , set_futures_index_daily ] = useState<FuturesIndexDailyItem[]>([])

  const getFuturesIndexDailyData = (params:FuturesIndexDailyParams)=>{
    console.log(params)
    queryFuturesIndexData(params).then((res)=>{
      console.log(res)
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_index_daily(_data)
      }
    })
  }

  return (
    <FuturesIndexDaily
      index_daily_data_source={ futures_index_daily }
      queryData={(params:FuturesIndexDailyParams)=>{ getFuturesIndexDailyData(params)}}></FuturesIndexDaily>
  )
}

export default FuturesIndexDailyPage;
