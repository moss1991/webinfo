import React, { useState, useRef } from 'react';

import FuturesHolding from './components/FuturesHolding';

import type {
  FuturesHoldingItem,
  FuturesHoldingParams,
} from './data';

import {
  queryFuturesHolding,
} from './service';

const FuturesHoldingPage: React.FC = () => {
  const [ futures_holding, set_futures_holding ] = useState<FuturesHoldingItem[]>([])

  const getFuturesHoldingData = (params:FuturesHoldingParams)=>{
    queryFuturesHolding(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_holding(_data)
      }
    })
  }

  return (
    <FuturesHolding
      holding_data_source={ futures_holding }
      queryData={(params:FuturesHoldingParams)=>{ getFuturesHoldingData(params)}}></FuturesHolding>
  )
}

export default FuturesHoldingPage
