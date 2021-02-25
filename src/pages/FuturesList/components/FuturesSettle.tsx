import React , { useState } from 'react';
import { Table , Form, Input, Select, Button, DatePicker } from 'antd';

import { FuturesSettleItem } from '../data'

const { Option } = Select;

export type FutureSettleProps = {
  settle_data_source:Array<FuturesSettleItem>;
  queryData:any;
}

const settle_columns = [
  {
    title: '合约代码',
    dataIndex: 'ts_code',
    key: 'ts_code',
    width: 150,
  },
  {
    title: '交易日期',
    dataIndex: 'trade_date',
    key: 'trade_date',
    width: 150,
  },
  {
    title: '结算价',
    dataIndex: 'settle',
    key: 'settle',
    width: 150,
  },
  {
    title: '交易手续费率',
    dataIndex: 'trading_fee_rate',
    key: 'trading_fee_rate',
    width: 150,
  },
  {
    title: '交易手续费',
    dataIndex: 'trading_fee',
    key: 'trading_fee',
    width: 150,
  },
  {
    title: '交割手续费',
    dataIndex: 'delivery_fee',
    key: 'delivery_fee',
    width: 150,
  },
  {
    title: '买套保交易保证金率',
    dataIndex: 'b_hedging_margin_rate',
    key: 'b_hedging_margin_rate',
    width: 150,
  },
  {
    title: '卖套保交易保证金率',
    dataIndex: 's_hedging_margin_rate',
    key: 's_hedging_margin_rate',
    width: 150,
  },
  {
    title: '买投机交易保证金率',
    dataIndex: 'long_margin_rate',
    key: 'long_margin_rate',
    width: 150,
  },
  {
    title: '卖投机交易保证金率',
    dataIndex: 'short_margin_rate',
    key: 'short_margin_rate',
    width: 150,
  },
  {
    title: '平今仓手续率',
    dataIndex: 'offset_today_fee',
    key: 'offset_today_fee',
    width: 150,
  },
  {
    title: '交易所',
    dataIndex: 'exchange',
    key: 'exchange',
    width: 150,
  },
]

const FuturesSettle : React.FC<FutureSettleProps> = (props) =>{

  const [ ts_code , set_ts_code ] = useState<string>('')
  const [ trade_date , set_trade_date ] = useState<string>('')
  const [ start_date , set_start_date ] = useState<string>('')
  const [ end_data , set_end_data ] = useState<string>('')
  const [ exchange , set_exchange ] = useState<string>('DCE')

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
      set_end_data(value.format('YYYYMMDD'))
    }
  }

  const handle_exchange_change = (value:string)=>{
    set_exchange(value)
  }

  const handle_query_click = () =>{
    let _params = {
      ts_code : ts_code,
      trade_date: trade_date,
      start_date : start_date,

    }
    props.queryData(_params)
  }

  return (
    <div>
      <Form name="wsr_form_controls" layout="inline">
        <Form.Item>
          <Input placeholder="请输入合约号" onChange={ handle_ts_code }/>
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
          <Select defaultValue="DCE" style={{ width: 240 }} onChange={ handle_exchange_change }>
            <Option value="CFFEX">CFFEX-中金所</Option>
            <Option value="DCE">DCE-大商所</Option>
            <Option value="CZCE">CZCE-郑商所</Option>
            <Option value="SHFE">SHFE-上期所</Option>
            <Option value="INE">INE-上海国际能源交易中心</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handle_query_click }>查询</Button>
        </Form.Item>
      </Form>

      <Table dataSource={ props.settle_data_source } columns={ settle_columns } pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>

    </div>
  )
}

export default FuturesSettle
