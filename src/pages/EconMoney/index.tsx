import React, { useState, useRef } from 'react';

import MoneyList from './components/MoneyList';

import type {
  MoneyQueryParams,
  MoneyItem,
 } from './data';

import {
  queryMoneyList,
} from './service';

const MoneyListPage:React.FC = ()=>{
  const [gdp_list , set_gdp_list ] = useState<MoneyItem[]>([])

  const getMoneyListData = (params:MoneyQueryParams)=>{
    queryMoneyList(params).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        set_gdp_list(_data)
      }
    })
  }

  return (
    <MoneyList moneylist_datasource={gdp_list} queryData={ (params:MoneyQueryParams) => { getMoneyListData(params)} }></MoneyList>
  )
}

export default MoneyListPage
