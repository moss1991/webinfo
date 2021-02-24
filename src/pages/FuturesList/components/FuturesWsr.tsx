import React , { useState } from 'react';
import { Table , Form, Input, Select, Button, DatePicker } from 'antd';

import { FuturesWsrItem } from '../data'

const { Option } = Select;

export type FutureWsrProps = {
  wsr_data_source:Array<FuturesWsrItem>;
  queryData:any;
}

const wsr_columns = [
  {
    title: '交易日期',
    dataIndex: 'trade_date',
    key: 'trade_date',
    width: 150,
  },
  {
    title: '产品代码',
    dataIndex: 'symbol',
    key: 'symbol',
    width: 150,
  },
  {
    title: '产品名称',
    dataIndex: 'fut_name',
    key: 'fut_name',
    width: 150,
  },
  {
    title: '仓库名称',
    dataIndex: 'warehouse',
    key: 'warehouse',
    width: 150,
  },
  {
    title: '仓库编号',
    dataIndex: 'wh_id',
    key: 'wh_id',
    width: 150,
  },
  {
    title: '昨日仓单量',
    dataIndex: 'pre_vol',
    key: 'pre_vol',
    width: 150,
  },
  {
    title: '今日仓单量',
    dataIndex: 'vol',
    key: 'vol',
    width: 150,
  },
  {
    title: '增减量',
    dataIndex: 'vol_chg',
    key: 'vol_chg',
    width: 150,
  },
  {
    title: '地区',
    dataIndex: 'area',
    key: 'area',
    width: 150,
  },
  {
    title: '年度',
    dataIndex: 'year',
    key: 'year',
    width: 150,
  },
  {
    title: '等级',
    dataIndex: 'grade',
    key: 'grade',
    width: 150,
  },
  {
    title: '品牌',
    dataIndex: 'brand',
    key: 'brand',
    width: 150,
  },
  {
    title: '产地',
    dataIndex: 'place',
    key: 'place',
    width: 150,
  },
  {
    title: '升贴水',
    dataIndex: 'pd',
    key: 'pd',
    width: 150,
  },
  {
    title: '是否折算仓单',
    dataIndex: 'is_ct',
    key: 'is_ct',
    width: 150,
  },
  {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
    width: 150,
  },
  {
    title: '交易所',
    dataIndex: 'exchange',
    key: 'exchange',
    width: 150,
  },
]

const FuturesWsr : React.FC<FutureWsrProps> = (props) =>{
  const [ symbol , set_symbol ] = useState<string>('')
  const [ exchange , set_exchange ] = useState<string>('DCE')

  const [ trade_date , set_trade_date ] = useState<string>('')
  const [ start_date , set_start_date ] = useState<string>('')
  const [ end_data , set_end_data ] = useState<string>('')

  const handle_exchange_change = (value:string)=>{
    set_exchange(value)
  }

  const check_required = ()=>{
    console.log(111)
    if((exchange == "") && (symbol == "")){
      return Promise.reject('合约标识和机构不能同时为空');
    }
    return Promise.resolve();
  }

  const handle_symbol_change = (e:any)=>{
    if(e.target.value){
      set_symbol(e.target.value)
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

  const handle_end_date =  (value:any)=>{
    if(value){
      set_end_data(value.format('YYYYMMDD'))
    }
  }

  const handle_query_click = ()=>{
    let _params = {
      trade_date: trade_date,
      symbol : symbol,

    }
    props.queryData(_params)
  }


  return (
    <div>
      <Form name="wsr_form_controls" layout="inline">
        <Form.Item rules={[ { validator: check_required },]}>
          <Input placeholder="请输入合约标识" onChange={ handle_symbol_change }/>

        </Form.Item>

        <Form.Item rules={[ { validator: check_required },]}>
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
            <Option value="">测试用</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handle_query_click }>查询</Button>
        </Form.Item>
      </Form>
      <Table dataSource={ props.wsr_data_source } columns={ wsr_columns } pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
    </div>
  )
}

export default FuturesWsr
