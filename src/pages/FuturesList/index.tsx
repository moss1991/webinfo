import React, { useState, useRef } from 'react';

import FuturesBase from './components/FuturesBase';
import FuturesDaily from './components/FuturesDaily';
import FuturesHolding from './components/FuturesHolding';
import FuturesWsr from './components/FuturesWsr';
import FuturesSettle from './components/FuturesSettle'
import FuturesIndexDaily from './components/FuturesIndexDaily'
import FuturesMapping from './components/FuturesMapping'

import type {
  futuresBaseItem ,
  futuresQueryParams ,
  futuresDailyItem ,
  futuresDailyParams,
  FuturesHoldingItem,
  FuturesHoldingParams,
  FuturesWsrParams,
  FuturesWsrItem,
  FuturesSettleParams,
  FuturesSettleItem,
  FuturesIndexDailyParams,
  FuturesIndexDailyItem,
  FutureMappingParams,
  FutureMappingItem,
  FutureWeeklyDetailParams,
  FutureWeeklyDetailItem
 } from './data';
import {
  queryFuturesBaseData,
  queryFuturesDaily,
  queryFuturesHolding,
  queryFuturesWsrData,
  queryFuturesSettleData,
  queryFuturesIndexData,
  queryFuturesMappingData,
  queryFuturesWeeklyDetailData
} from './service';

const FuturesInfo: React.FC = () => {
  const [ futures_base , set_futures_base ] = useState<futuresBaseItem[]>([])
  const [ futures_daily1 , set_futures_daily1 ] = useState<futuresDailyItem[]>([])
  const [ futures_daily2 , set_futures_daily2 ] = useState<futuresDailyItem[]>([])
  const [ futures_holding, set_futures_holding ] = useState<FuturesHoldingItem[]>([])
  const [ futures_wsr, set_futures_wsr ] = useState<FuturesWsrItem[]>([])
  const [ futures_settle , set_futures_settle ] = useState<FuturesSettleItem[]>([])
  const [ futures_index_daily , set_futures_index_daily ] = useState<FuturesIndexDailyItem[]>([])
  const [ futures_mapping , set_futures_mapping ] = useState<FutureMappingItem[]>([])

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

  const getFuturesWsrData = (params:FuturesWsrParams)=>{
    queryFuturesWsrData(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_wsr(_data)
      }
    })
  }

  const getFuturesSettleData = (params:FuturesSettleParams)=>{
    queryFuturesSettleData(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_settle(_data)
      }
    })
  }

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
    <div>
      <h1>期货基本信息</h1>
      <FuturesBase futuresbase_datasoure={futures_base} queryData={(params:futuresQueryParams)=>{ getFuturesBaseData(params) }}></FuturesBase>
      <h1>交易日历(重复)</h1>
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

      <h1>仓单日报</h1>
      <FuturesWsr
        wsr_data_source={ futures_wsr }
        queryData={(params:FuturesWsrParams)=>{ getFuturesWsrData(params)}}
      ></FuturesWsr>

      <h1>结算参数</h1>
      <FuturesSettle
        settle_data_source={futures_settle }
        queryData={(params:FuturesSettleParams)=>{ getFuturesSettleData(params)}}>
      </FuturesSettle>

      <h1>南华期货指数日线行情</h1>
      <FuturesIndexDaily
        index_daily_data_source={ futures_index_daily }
        queryData={(params:FuturesIndexDailyParams)=>{ getFuturesIndexDailyData(params)}}></FuturesIndexDaily>

      <h1>期货主力与连续合约</h1>
      <FuturesMapping
        mapping_data_source={ futures_mapping }
        queryData={(params:FutureMappingParams)=>{ getFuturesMappingData(params)}}></FuturesMapping>
      <h1>期货主要品种交易周报</h1>
    </div>
  );
}

export default FuturesInfo;
