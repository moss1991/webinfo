import React, { useState, useRef } from 'react';

import FuturesWsr from './components/FuturesWsr';

import type {
  FuturesWsrParams,
  FuturesWsrItem,
} from './data';

import {
  queryFuturesWsrData,
} from './service';

const FuturesWsrPage: React.FC = () => {
  const [ futures_wsr, set_futures_wsr ] = useState<FuturesWsrItem[]>([])

  const getFuturesWsrData = (params:FuturesWsrParams)=>{
    queryFuturesWsrData(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_wsr(_data)
      }
    })
  }

  return (
    <FuturesWsr
      wsr_data_source={ futures_wsr }
      queryData={(params:FuturesWsrParams)=>{ getFuturesWsrData(params)}}
    ></FuturesWsr>
  )
}

export default FuturesWsrPage;
