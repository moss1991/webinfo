import React , { useState } from 'react';
import { Table , Form, Input, Select, Button, DatePicker } from 'antd';

import { FutureMappingItem } from '../data'

export type FuturesMappingProps = {
  mapping_data_source:Array<FutureMappingItem>;
  queryData:any;
}
const mapping_columns = [
  {
    title: '连续合约代码',
    dataIndex: 'ts_code',
    key: 'ts_code',
    width: 150,
  },
  {
    title: '起始日期',
    dataIndex: 'trade_date',
    key: 'trade_date',
    width: 150,
  },
  {
    title: '期货合约代码',
    dataIndex: 'mapping_ts_code',
    key: 'mapping_ts_code',
    width: 150,
  },
]

const FuturesMapping : React.FC<FuturesMappingProps> = (props) =>{
  const [ ts_code , set_ts_code ] = useState<string>('TF.CFX')
  const [ trade_date , set_trade_date ] = useState<string>('')
  const [ start_date , set_start_date ] = useState<string>('')
  const [ end_date , set_end_date ] = useState<string>('')

  const handle_ts_code = (e:any)=>{
    if(e.target.value){
      set_ts_code(e.target.value)
    }
  }

  const handle_trade_date = (value:any)=>{
    if(value){
      set_trade_date(value.format('YYYYMMDD'))
    }
  }

  const handle_start_date = (value:any)=>{
    if(value){
      set_start_date(value.format('YYYYMMDD'))
    }
  }

  const handle_end_date = (value:any)=>{
    if(value){
      set_end_date(value.format('YYYYMMDD'))
    }
  }

  const handle_query_click = () =>{
    let _params = {
      ts_code : ts_code,
      trade_date: trade_date,
      start_date : start_date,
      end_date : end_date
    }
    props.queryData(_params)
  }
  return (
    <div>
      <h1>期货主力与连续合约</h1>

      <Form name="wsr_form_controls" layout="inline">
        <Form.Item>
          <Input defaultValue={ ts_code } placeholder="请输入合约号" onChange={ handle_ts_code }/>
        </Form.Item>

        <Form.Item>
          交易日期<DatePicker onChange={ handle_trade_date } />
        </Form.Item>

        <Form.Item>
          开始时间<DatePicker onChange={ handle_start_date } />
        </Form.Item>
        <Form.Item>
          结束时间<DatePicker onChange={ handle_end_date } />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handle_query_click }>查询</Button>
        </Form.Item>
      </Form>
      <Table dataSource={ props.mapping_data_source } columns={ mapping_columns } pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
    </div>
  )
}

export default FuturesMapping
