import React , { useState } from 'react';
import { Table , Form, Input, Select, Button, DatePicker } from 'antd';

import { FuturesIndexDailyItem } from '../data'

const { Option } = Select;

export type FuturesIndexDailyProps = {
  index_daily_data_source:Array<FuturesIndexDailyItem>;
  queryData:any;
}

const index_daily_columns = [
  {
    title: 'TS指数代码',
    dataIndex: 'ts_code',
    key: 'ts_code',
    width: 150,
  },
  {
    title: '交易日',
    dataIndex: 'trade_date',
    key: 'trade_date',
    width: 150,
  },
  {
    title: '收盘点位',
    dataIndex: 'close',
    key: 'close',
    width: 150,
  },
  {
    title: '开盘点位',
    dataIndex: 'open',
    key: 'open',
    width: 150,
  },
  {
    title: '最高点位',
    dataIndex: 'high',
    key: 'high',
    width: 150,
  },
  {
    title: '最低点位',
    dataIndex: 'low',
    key: 'low',
    width: 150,
  },
  {
    title: '昨日收盘点',
    dataIndex: 'pre_close',
    key: 'pre_close',
    width: 150,
  },
  {
    title: '涨跌点',
    dataIndex: 'change',
    key: 'change',
    width: 150,
  },
  {
    title: '涨跌幅',
    dataIndex: 'pct_chg',
    key: 'pct_chg',
    width: 150,
  },
  {
    title: '成交量（手）',
    dataIndex: 'vol',
    key: 'vol',
    width: 150,
  },
  {
    title: '成交额（千元）',
    dataIndex: 'amount',
    key: 'amount',
    width: 150,
  },
]

const FuturesIndexDaily: React.FC<FuturesIndexDailyProps> = (props) =>{
  const [ ts_code , set_ts_code ] = useState<string>('CU.NH')
  const [ trade_date , set_trade_date ] = useState<string>('')
  const [ start_date , set_start_date ] = useState<string>('20180101')
  const [ end_date , set_end_date ] = useState<string>('20181201')

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
      <Form name="wsr_form_controls" layout="inline">
        <Form.Item>
          <Input defaultValue={ ts_code  } placeholder="请输入合约号" onChange={ handle_ts_code }/>
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
      <Table dataSource={ props.index_daily_data_source } columns={ index_daily_columns } pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
    </div>
  )
}

export default FuturesIndexDaily
