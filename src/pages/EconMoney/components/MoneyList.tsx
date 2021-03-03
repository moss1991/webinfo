import React , { useState } from 'react';
import { Table , Form, Input, Select, Button } from 'antd';
import { MoneyItem } from '../data'
import MoneyChart from './MoneyChart'

export type MoneyListProps = {
  moneylist_datasource : Array<MoneyItem>;
  queryData : any;
}

const moneylist_columns = [
  {
    title: '月份YYYYMM',
    dataIndex: 'month',
    key: 'month',
    width: 200,
  },
  {
    title: 'M0（亿元）',
    dataIndex: 'm0',
    key: 'm0',
    width: 200,
  },

  {
    title: 'M0同比（%）',
    dataIndex: 'm0_yoy',
    key: 'm0_yoy',
    width: 200,
  },
  {
    title: 'M0环比（%）',
    dataIndex: 'm0_mom',
    key: 'm0_mom',
    width: 200,
  },
  {
    title: 'M1（亿元）',
    dataIndex: 'm1',
    key: 'm1',
    width: 200,
  },
  {
    title: 'M1同比（%）',
    dataIndex: 'm1_yoy',
    key: 'm1_yoy',
    width: 200,
  },
  {
    title: 'M1环比（%）',
    dataIndex: 'm1_mom',
    key: 'm1_mom',
    width: 200,
  },
  {
    title: 'M2（亿元）',
    dataIndex: 'm2',
    key: 'm2',
    width: 200,
  },
  {
    title: 'M2同比（%）',
    dataIndex: 'm2_yoy',
    key: 'm2_yoy',
    width: 200,
  },
  {
    title: 'M2环比（%）',
    dataIndex: 'm2_mom',
    key: 'm2_mom',
    width: 200,
  },
]

const MoneyList : React.FC<MoneyListProps> = (props) =>{
  const [ m, set_m ] = useState<string>();
  const [ start_m , set_start_m ] = useState<string>("201901");
  const [ end_m , set_end_m ] = useState<string>('202103');

  const handle_m = (e:any)=>{
    if(e.target.value){
      set_m(e.target.value)
    }
  }

  const handle_start_m = (e:any)=>{
    if(e.target.value){
      set_start_m(e.target.value)
    }
  }

  const handle_end_m = (e:any)=>{
    if(e.target.value){
      set_end_m(e.target.value)
    }
  }

  const handle_query =()=>{
    let _params = {
      m : m,
      start_m : start_m,
      end_m : end_m
    }
    props.queryData(_params)
  }

  return (
    <div>
      <h1>货币供应量</h1>
      <Form name='futuresbase_form_controls' layout='inline'>
        <Form.Item>
          <Input defaultValue={ m } placeholder="请输入季度" onChange={ handle_m }/>
        </Form.Item>

        <Form.Item>
          <Input defaultValue={ start_m } placeholder="请输入开始季度" onChange={ handle_start_m }/>
        </Form.Item>

        <Form.Item>
          <Input defaultValue={ end_m } placeholder="请输入结束季度" onChange={ handle_end_m }/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handle_query }>查询</Button>
        </Form.Item>
      </Form>
      <Table dataSource={ props.moneylist_datasource } columns={ moneylist_columns } pagination={{ pageSize: 50 }} scroll={{  x:1500, y: 480 }} ></Table>
      <MoneyChart dataSource={ props.moneylist_datasource } ></MoneyChart>
    </div>
  )
}

export default MoneyList
