import React, { useState, useRef } from 'react';
import FuturesDaily from './components/FuturesDaily';
import type {
  futuresDailyItem ,
  futuresDailyParams,
} from './data';

import {
  queryFuturesDaily,
} from './service';

const FuturesDailyPage: React.FC = () => {
  const [ futures_daily1 , set_futures_daily1 ] = useState<futuresDailyItem[]>([])
  const [ futures_daily2 , set_futures_daily2 ] = useState<futuresDailyItem[]>([])

  const getFuturesDailyData = (params?:futuresDailyParams)=>{
    queryFuturesDaily(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_daily1(_data)
      }
    })
  }

  const clearDailyData = ()=>{
    set_futures_daily1([])
    set_futures_daily2([])
  }

  return (
      <FuturesDaily
        futures_daily_datasoure1={ futures_daily1 }
        futures_daily_datasoure2={ futures_daily2 }
        queryData={(params:futuresDailyParams)=>{ getFuturesDailyData(params)}}
        clearTableData={()=>{ clearDailyData()}}></FuturesDaily>
  )
}

export default FuturesDailyPage
