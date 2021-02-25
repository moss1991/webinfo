import React , { useState } from 'react';
import { Table , Form, Input, Select, Button, DatePicker } from 'antd';

import { FutureWeeklyDetailItem } from '../data'

const { Option } = Select;

export type FuturesWeeklyDetailProps = {
  weeklydetail_data_source:Array<FutureWeeklyDetailItem>;
  queryData:any;
}

const weekly_detail_columns = [
  {
    title: '交易所代码',
    dataIndex: 'exchange',
    key: 'exchange',
    width: 150,
  },
  {
    title: '期货品种代码',
    dataIndex: 'prd',
    key: 'prd',
    width: 150,
  },
  {
    title: '品种名称',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: '成交量（手）',
    dataIndex: 'vol',
    key: 'vol',
    width: 150,
  },
  {
    title: '同比增减（%）',
    dataIndex: 'vol_yoy',
    key: 'vol_yoy',
    width: 150,
  },
  {
    title: '成交金额（亿元）',
    dataIndex: 'amount',
    key: 'amount',
    width: 150,
  },
  {
    title: '同比增减（%）',
    dataIndex: 'amout_yoy',
    key: 'amout_yoy',
    width: 150,
  },
  {
    title: '年累计成交总量（手）',
    dataIndex: 'cumvol',
    key: 'cumvol',
    width: 150,
  },
  {
    title: '同比增减（%）',
    dataIndex: 'cumvol_yoy',
    key: 'cumvol_yoy',
    width: 150,
  },
  {
    title: '年累计成交金额（亿元）',
    dataIndex: 'cumamt',
    key: 'cumamt',
    width: 150,
  },
  {
    title: '同比增减（%）',
    dataIndex: 'cumamt_yoy',
    key: 'cumamt_yoy',
    width: 150,
  },
  {
    title: '持仓量（手）',
    dataIndex: 'open_interest',
    key: 'open_interest',
    width: 150,
  },
  {
    title: '环比增减（%）',
    dataIndex: 'interest_wow',
    key: 'interest_wow',
    width: 150,
  },
  {
    title: '本周主力合约收盘价',
    dataIndex: 'mc_close',
    key: 'mc_close',
    width: 150,
  },
  {
    title: '环比涨跌（%）',
    dataIndex: 'close_wow',
    key: 'close_wow',
    width: 150,
  },
  {
    title: '周期',
    dataIndex: 'week',
    key: 'week',
    width: 150,
  },
  {
    title: '周日期',
    dataIndex: 'week_date',
    key: 'week_date',
    width: 150,
  },
]

const FuturesWeeklyDetail : React.FC<FuturesWeeklyDetailProps> = (props) =>{

  const [ week , set_week ] = useState<string>('')
  const [ prd , set_prd ] = useState<string>('CU')
  const [ start_week , set_start_week ] = useState<string>('202001')
  const [ end_week , set_end_week ] = useState<string>('202003')
  const [ exchange , set_exchange ] = useState<string>('')

  const handle_week = (e:any)=>{
    if(e.target.value){
      set_week(e.target.value)
    }
  }

  const handle_prd = (e:any)=>{
    if(e.target.value){
      set_prd(e.target.value)
    }
  }

  const handle_start_week = (e:any)=>{
    if(e.target.value){
      set_start_week(e.target.value)
    }
  }

  const handle_end_week = (e:any)=>{
    if(e.target.value){
      set_end_week(e.target.value)
    }
  }

  const handle_exchange_change = (value:string)=>{
    set_exchange(value)
  }

  const handle_query_click = ()=>{
    let _params = {
      week: week,
      prd : prd,
      start_week:start_week,
      end_week:end_week,
      exchange:exchange
    }
    props.queryData(_params)
  }

  return (
    <div>
      <Form name="wsr_form_controls" layout="inline">
        <Form.Item>
          周期<Input placeholder="e.g. 202001 表示2020第1周" onChange={ handle_week }/>
        </Form.Item>

        <Form.Item>
          期货品种<Input defaultValue={ prd }  placeholder="英文逗号分隔" onChange={ handle_prd }/>
        </Form.Item>

        <Form.Item>
          开始周期<Input defaultValue={ start_week }  placeholder="e.g. 202001" onChange={ handle_start_week }/>
        </Form.Item>

        <Form.Item>
          结束周期<Input defaultValue={ end_week } placeholder="e.g. 202002" onChange={ handle_end_week }/>
        </Form.Item>

        <Form.Item>
          <Select defaultValue="" style={{ width: 200 }} onChange={ handle_exchange_change }>
            <Option value="CFFEX">CFFEX-中金所</Option>
            <Option value="DCE">DCE-大商所</Option>
            <Option value="CZCE">CZCE-郑商所</Option>
            <Option value="SHFE">SHFE-上期所</Option>
            <Option value="INE">INE-上海国际能源交易中心</Option>
            <Option value="">全部</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handle_query_click }>查询</Button>
        </Form.Item>
      </Form>
      <Table dataSource={ props.weeklydetail_data_source } columns={ weekly_detail_columns } pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
    </div>
  )
}

export default FuturesWeeklyDetail
