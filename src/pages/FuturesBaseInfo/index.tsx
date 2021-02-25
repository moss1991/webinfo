import React, { useState, useRef } from 'react';

import FuturesBase from './components/FuturesBase';

import type {
  futuresBaseItem ,
  futuresQueryParams ,
} from './data';

import {
  queryFuturesBaseData
} from './service';

const FuturesBaseInfo: React.FC = () => {
  const [ futures_base , set_futures_base ] = useState<futuresBaseItem[]>([])

  const getFuturesBaseData = (params?:futuresQueryParams)=>{
    queryFuturesBaseData(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_futures_base(_data)
      }
    })
  }

  return (
    <div>
      <h1>期货合约信息表</h1>
      <FuturesBase futuresbase_datasoure={futures_base} queryData={(params:futuresQueryParams)=>{ getFuturesBaseData(params) }}></FuturesBase>
    </div>
  )
}

export default FuturesBaseInfo;
