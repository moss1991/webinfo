import React , { useState } from 'react';
import { Table , Form, Input, Select, Button } from 'antd';
import { GdpItem } from '../data'

const { Option } = Select;

export type GdpListProps = {
  gdplist_datasource : Array<GdpItem>;
  queryData : any;
}

const gdplist_columns = [
  {
    title: '季度',
    dataIndex: 'quarter',
    key: 'quarter',
    width: 150,
  },
  {
    title: 'GDP累计值（亿元）',
    dataIndex: 'gdp',
    key: 'gdp',
    width: 200,
  },
  {
    title: '当季同比增速（%）',
    dataIndex: 'gdp_yoy',
    key: 'gdp_yoy',
    width: 200,
  },
  {
    title: '第一产业累计值（亿元）',
    dataIndex: 'pi',
    key: 'pi',
    width: 200,
  },

  {
    title: '第一产业同比增速（%）',
    dataIndex: 'pi_yoy',
    key: 'pi_yoy',
    width: 200,
  },

  {
    title: '第二产业累计值（亿元）',
    dataIndex: 'si',
    key: 'si',
    width: 200,
  },
  {
    title: '第二产业同比增速（%）',
    dataIndex: 'si_yoy',
    key: 'si_yoy',
    width: 200,
  },
  {
    title: '第三产业累计值（亿元）',
    dataIndex: 'ti',
    key: 'ti',
    width: 200,
  },
  {
    title: '第三产业同比增速（%）',
    dataIndex: 'ti_yoy',
    key: 'ti_yoy',
    width: 200,
  },
]

const GdpList : React.FC<GdpListProps> = (props) =>{
  const [ q , set_q ] = useState<string>();
  const [ start_q , set_start_q ] = useState<string>("2020Q1");
  const [ end_q , set_end_q ] = useState<string>('2020Q4');

  const handle_q = (e:any)=>{
    if(e.target.value){
      set_q(e.target.value)
    }
  }

  const handle_start_q = (e:any)=>{
    if(e.target.value){
      set_start_q(e.target.value)
    }
  }

  const handle_end_q = (e:any)=>{
    if(e.target.value){
      set_end_q(e.target.value)
    }
  }

  const handle_query =()=>{
    let _params = {
      q : q,
      start_q : start_q,
      end_q : end_q
    }
    props.queryData(_params)
  }

  return (
    <div>
      <h1>国内生产总值</h1>
      <Form name='futuresbase_form_controls' layout='inline'>
        <Form.Item>
          <Input defaultValue={ q } placeholder="请输入季度" onChange={ handle_q }/>
        </Form.Item>

        <Form.Item>
          <Input defaultValue={ start_q } placeholder="请输入开始季度" onChange={ handle_start_q }/>
        </Form.Item>

        <Form.Item>
          <Input defaultValue={ end_q } placeholder="请输入结束季度" onChange={ handle_end_q }/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handle_query }>查询</Button>
        </Form.Item>
      </Form>
      <Table dataSource={ props.gdplist_datasource } columns={ gdplist_columns} pagination={{ pageSize: 50 }} scroll={{  x:1500, y: 480 }} ></Table>
    </div>
  )
}

export default GdpList
