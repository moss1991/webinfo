import React , { useState , useLayoutEffect} from 'react';
import { Table , Form, Input, Select, Button } from 'antd';
import { CpiItem } from '../data'
import CpiChart from './CpiChart'

const { Option } = Select;

export type CpiListProps = {
  cpilist_datasource : Array<CpiItem>;
  queryData : any;
}

const cpilist_columns = [
  {
    title: '月份',
    dataIndex: 'month',
    key: 'month',
    width: 150,
  },
  {
    title: '全国当月至',
    dataIndex: 'nt_val',
    key: 'nt_val',
    width: 150,
  },
  {
    title: '全国同比（%）',
    dataIndex: 'nt_yoy',
    key: 'nt_yoy',
    width: 150,
  },
  {
    title: '全国环比（%）',
    dataIndex: 'nt_mom',
    key: 'nt_mom',
    width: 150,
  },
  {
    title: '全国累计值',
    dataIndex: 'nt_accu',
    key: 'nt_accu',
    width: 150,
  },

  {
    title: '城市当值月',
    dataIndex: 'town_val',
    key: 'town_val',
    width: 150,
  },

  {
    title: '城市同比（%）',
    dataIndex: 'town_yoy',
    key: 'town_yoy',
    width: 150,
  },

  {
    title: '城市环比（%）',
    dataIndex: 'town_mom',
    key: 'town_mom',
    width: 150,
  },

  {
    title: '城市累计值',
    dataIndex: 'town_accu',
    key: 'town_accu',
    width: 150,
  },

  {
    title: '农村当月值',
    dataIndex: 'cnt_val',
    key: 'cnt_val',
    width: 150,
  },

  {
    title: '农村同比（%）',
    dataIndex: 'cnt_yoy',
    key: 'cnt_yoy',
    width: 150,
  },

  {
    title: '农村环比（%）',
    dataIndex: 'cnt_mom',
    key: 'cnt_mom',
    width: 150,
  },

  {
    title: '农村累计值',
    dataIndex: 'cnt_accu',
    key: 'cnt_accu',
    width: 150,
  },

]

const CpiList : React.FC<CpiListProps> = (props) =>{
  const [m , set_m] = useState<string>();
  const [start_m , set_start_m] = useState<string>('201801');
  const [end_m , set_end_m] = useState<string>('202103');

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
  const handle_query_click = ()=>{
    let _params = {
      m : m,
      start_m : start_m,
      end_m : end_m
    }
    props.queryData(_params)
  }

  useLayoutEffect(() => {
    handle_query_click()
    return () => {};
  },[])

  return (
    <div>
      <h1>居民消费价格指数(cpi)</h1>
      <Form name='futuresbase_form_controls' layout='inline'>
        <Form.Item>
          <Input defaultValue={ m } placeholder="月份" alt="YYYYMM，支持多个月份同时输入，逗号分隔" onChange={ handle_m }/>
        </Form.Item>

        <Form.Item>
          <Input defaultValue={ start_m } placeholder="请输入开始月份" onChange={ handle_start_m }/>
        </Form.Item>

        <Form.Item>
          <Input defaultValue={ end_m } placeholder="请输入结束月份" onChange={ handle_end_m }/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handle_query_click }>查询</Button>
        </Form.Item>
      </Form>
      <Table dataSource={ props.cpilist_datasource } columns={ cpilist_columns } pagination={{ pageSize: 50 }} scroll={{  x:1500, y: 480 }} ></Table>
      <CpiChart dataSource={ props.cpilist_datasource }></CpiChart>
    </div>
  )
}

export default CpiList
