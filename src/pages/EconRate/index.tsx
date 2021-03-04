import React, { useState, useRef } from 'react';
import { Table , Form, Input, Select, Button , DatePicker } from 'antd';
import type { RateItem } from './data';
import { table_params } from './param'
import RateQueryForm from './components/RateQueryForm'
import { queryRateList } from './service';

const RateListPage:React.FC = ()=>{
  const [ rate , set_rate ] = useState<RateItem[]>([])

  const getRateData = ()=>{
    queryRateList().then((res)=>{
      console.log(res)
      if(res.code == 200){
        let _data = res.data
        set_rate(_data)
      }
    })
  }

  return(
    <div>
      <RateQueryForm queryData={ ()=>{ getRateData() } }></RateQueryForm>
      <Table dataSource={ rate } columns={ table_params.columns } pagination={{ pageSize: table_params.page_size }} scroll={{  x:table_params.width, y: table_params.height }} ></Table>
    </div>
  )
}
export default RateListPage
