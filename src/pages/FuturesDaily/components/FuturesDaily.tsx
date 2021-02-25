import React , { useState } from 'react';
import { Tabs , Table , Form, Input, Select, Button, DatePicker, Space } from 'antd';

import type { futuresDailyItem , futuresDailyParams } from '../data';

const { Option } = Select;
const { TabPane } = Tabs;

export type FuturesDailyProps = {
  futures_daily_datasoure1 : Array<futuresDailyItem>;
  futures_daily_datasoure2 : Array<futuresDailyItem>;
  queryData:any;
  clearTableData:any;
}

const fut_daily_columns = [
  {
    title: 'TS合约代码',
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
    title: '昨收盘价',
    dataIndex: 'pre_close',
    key: 'pre_close',
    width: 150,
  },

  {
    title: '昨结算价',
    dataIndex: 'pre_settle',
    key: 'pre_settle',
    width: 150,
  },

  {
    title: '开盘价',
    dataIndex: 'open',
    key: 'open',
    width: 150,
  },

  {
    title: '最高价',
    dataIndex: 'high',
    key: 'high',
    width: 150,
  },

  {
    title: '最低价',
    dataIndex: 'low',
    key: 'low',
    width: 150,
  },

  {
    title: '最低价',
    dataIndex: 'low',
    key: 'low',
    width: 150,
  },

  {
    title: '收盘价',
    dataIndex: 'close',
    key: 'close',
    width: 150,
  },

  {
    title: '结算价',
    dataIndex: 'settle',
    key: 'settle',
    width: 150,
  },

  {
    title: '涨跌1 收盘价-昨结算价',
    dataIndex: 'change1',
    key: 'change1',
    width: 200,
  },

  {
    title: '涨跌2 结算价-昨结算价',
    dataIndex: 'change2',
    key: 'change2',
    width: 200,
  },

  {
    title: '成交量(手)',
    dataIndex: 'vol',
    key: 'vol',
    width: 100,
  },

  {
    title: '成交金额(万元)',
    dataIndex: 'amount',
    key: 'amount',
    width: 100,
  },

  {
    title: '持仓量(手)',
    dataIndex: 'oi',
    key: 'oi',
    width: 100,
  },

  {
    title: '持仓量变化',
    dataIndex: 'oi_chg',
    key: 'oi_chg',
    width: 150,
  },

  {
    title: '交割结算价',
    dataIndex: 'delv_settle',
    key: 'delv_settle',
    width: 150,
  },
]

const FuturesDaily : React.FC<FuturesDailyProps> = (props) =>{
  const [ nowpage , set_nowpage ] = useState<number>(1)
  const [ start_date , set_start_date ] = useState<string>('20180101')
  const [ end_data , set_end_data ] = useState<string>('20201231')
  const [ ts_code , set_ts_code ] = useState<string>('JD1907.DCE')
  const [ exchange , set_exchange ] = useState<string>('DCE')

  const handle_panel_change = (value:any)=>{
    set_nowpage(parseInt(value))
    props.clearTableData()
  }

  const handle_start_date = (value:any)=>{
    if(value){
      set_start_date(value.format('YYYYMMDD'))
    }
  }

  const handle_end_date =  (value:any)=>{
    if(value){
      set_end_data(value.format('YYYYMMDD'))
    }
  }

  const handle_ts_code = (e:any)=>{
    if(e.target.value){
      set_ts_code(e.target.value)
    }
  }

  const handle_exchange_change = (value:string)=>{
    set_exchange(value)
  }

  const handle_query_click = ()=>{
    console.log('call query')
    if(nowpage === 1){
      props.queryData({
        ts_code : ts_code,
        exchange : "",
        start_date : start_date ,
        end_date : end_data
      })
    }
    if(nowpage === 2){
      props.queryData({
        ts_code:"",
        exchange : exchange,
        start_date : start_date ,
        end_date : end_data
      })
    }
  }

  return (
    <div>
      <h1>期货日线行情</h1>
      <Tabs defaultActiveKey="1" onChange={ handle_panel_change }>
        <TabPane tab="按照合约代码查询" key="1">
          <Form name='futuresbase_form_controls' layout='inline'>
            <Form.Item>
              <Input defaultValue={ ts_code } placeholder="请输入合约号" onChange={ handle_ts_code }/>
            </Form.Item>
            <Form.Item label="开始时间">
              <DatePicker onChange={ handle_start_date } />
            </Form.Item>
            <Form.Item label="结束时间">
              <DatePicker onChange={ handle_end_date } />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={ handle_query_click }>查询</Button>
            </Form.Item>
          </Form>
          <Table dataSource={ props.futures_daily_datasoure1 } columns={ fut_daily_columns} pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
        </TabPane>
        <TabPane tab="按照交易所代码查询" key="2">

        <Form name='futuresbase_form_controls' layout='inline'>
          <Form.Item>
            <Select defaultValue="DCE" style={{ width: 240 }} onChange={ handle_exchange_change }>
              <Option value="CFFEX">CFFEX-中金所</Option>
              <Option value="DCE">DCE-大商所</Option>
              <Option value="CZCE">CZCE-郑商所</Option>
              <Option value="SHFE">SHFE-上期所</Option>
              <Option value="INE">INE-上海国际能源交易中心</Option>
            </Select>
          </Form.Item>

          <Form.Item label="开始时间">
            <DatePicker onChange={ handle_start_date } />
          </Form.Item>
          <Form.Item label="结束时间">
            <DatePicker onChange={ handle_end_date } />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={ handle_query_click }>查询</Button>
          </Form.Item>
        </Form>

        <Table dataSource={ props.futures_daily_datasoure1 } columns={ fut_daily_columns } pagination={{ pageSize: 50 }} scroll={{ y: 480 }} ></Table>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default FuturesDaily;
