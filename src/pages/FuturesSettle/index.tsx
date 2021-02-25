import React, { useState, useRef } from 'react';

import FuturesSettle from './components/FuturesSettle'

import type {
  FuturesSettleParams,
  FuturesSettleItem,
} from './data';

import {
  queryFuturesSettleData,
} from './service';

const FuturesSettlePage: React.FC = () => {
  const [ futures_settle , set_futures_settle ] = useState<FuturesSettleItem[]>([])

  const getFuturesSettleData = (params:FuturesSettleParams)=>{
    queryFuturesSettleData(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_settle(_data)
      }
    })
  }

  return (
    <FuturesSettle
      settle_data_source={futures_settle }
      queryData={(params:FuturesSettleParams)=>{ getFuturesSettleData(params)}}>
    </FuturesSettle>
  )
}

export default FuturesSettlePage;
