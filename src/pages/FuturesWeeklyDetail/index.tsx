import React, { useState, useRef } from 'react';

import FuturesWeeklyDetail from './components/FuturesWeeklyDetail'

import type {
  FutureWeeklyDetailParams,
  FutureWeeklyDetailItem
 } from './data';
import {
  queryFuturesWeeklyDetailData
} from './service';

const FutureWeeklyDetailPage: React.FC = () => {
  const [ futures_weeklydetail , set_futures_weeklydetail ] = useState<FutureWeeklyDetailItem[]>([])

  const getFuturesWeeklyDetailData = (params:FutureWeeklyDetailParams)=>{
    queryFuturesWeeklyDetailData(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_weeklydetail(_data)
      }
    })
  }

  return (
    <FuturesWeeklyDetail
      weeklydetail_data_source={ futures_weeklydetail }
      queryData={(params:FutureWeeklyDetailParams)=>{ getFuturesWeeklyDetailData(params)}}
    ></FuturesWeeklyDetail>
  )
}

export default FutureWeeklyDetailPage;
