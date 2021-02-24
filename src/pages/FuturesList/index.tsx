import React, { useState, useRef } from 'react';

import FuturesBase from './components/FuturesBase';
import FuturesDaily from './components/FuturesDaily';
import FuturesHolding from './components/FuturesHolding';

import type {
  futuresBaseItem ,
  futuresQueryParams ,
  futuresDailyItem ,
  futuresDailyParams,
  FuturesHoldingItem,
  FuturesHoldingParams,
 } from './data';
import {
  queryFuturesBaseData , queryFuturesDaily  , queryFuturesHolding} from './service';

const FuturesInfo: React.FC = () => {
  const [ futures_base , set_futures_base ] = useState<futuresBaseItem[]>([])
  const [ futures_daily1 , set_futures_daily1 ] = useState<futuresDailyItem[]>([])
  const [ futures_daily2 , set_futures_daily2 ] = useState<futuresDailyItem[]>([])
  const [ futures_holding, set_futures_holding ] = useState<FuturesHoldingItem[]>([])

  const getFuturesBaseData = (params?:futuresQueryParams)=>{
    queryFuturesBaseData(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_base(_data)
      }
    })
  }

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

  const getFuturesHoldingData = (params:FuturesHoldingParams)=>{
    queryFuturesHolding(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_holding(_data)
      }
    })
  }

  return (
    <div>
      <h1>期货基本信息</h1>
      <FuturesBase futuresbase_datasoure={futures_base} queryData={(params:futuresQueryParams)=>{ getFuturesBaseData(params) }}></FuturesBase>
      <h1>期货日线行情</h1>
      <FuturesDaily
        futures_daily_datasoure1={ futures_daily1 }
        futures_daily_datasoure2={ futures_daily2 }
        queryData={(params:futuresDailyParams)=>{ getFuturesDailyData(params)}}
        clearTableData={()=>{ clearDailyData()}}></FuturesDaily>
      <h1>每日成交持仓排名</h1>
      <FuturesHolding
        holding_data_source={ futures_holding }
        queryData={(params:FuturesHoldingParams)=>{ getFuturesHoldingData(params)}}></FuturesHolding>
      <h1>仓单日报(重复)</h1>
      <h1>结算参数</h1>
      <h1>南华期货指数日线行情</h1>
      <h1>期货主力与连续合约</h1>
      <h1>期货主要品种交易周报</h1>
    </div>
  );
}

export default FuturesInfo;
