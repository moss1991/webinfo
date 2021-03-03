import React , { useState } from 'react';
import { Table , Form, Input, Select, Button } from 'antd';
import { PpiItem } from '../data'

const { Option } = Select;

export type PpiListProps = {
  ppilist_datasource : Array<PpiItem>;
  queryData : any;
}

const ppilist_columns = [
  {
    title: '月份',
    dataIndex: 'month',
    key: 'month',
    width: 150,
  },
  {
    title: '全部工业品：当月同比',
    dataIndex: 'ppi_yoy',
    key: 'ppi_yoy',
    width: 150,
  },

  {
    title: '生产资料：当月同比',
    dataIndex: 'ppi_mp_yoy',
    key: 'ppi_mp_yoy',
    width: 150,
  },

  {
    title: '生产资料：采掘业：当月同比',
    dataIndex: 'ppi_mp_qm_yoy',
    key: 'ppi_mp_qm_yoy',
    width: 150,
  },


  {
    title: '生产资料：原料业：当月同比',
    dataIndex: 'ppi_mp_qm_yoy',
    key: 'ppi_mp_rm_yoy',
    width: 150,
  },

  {
    title: '生产资料：加工业：当月同比',
    dataIndex: 'ppi_mp_p_yoy',
    key: 'ppi_mp_p_yoy',
    width: 150,
  },

  {
    title: '生活资料：当月同比',
    dataIndex: 'ppi_cg_yoy',
    key: 'ppi_cg_yoy',
    width: 150,
  },

  {
    title: '生活资料：食品类：当月同比',
    dataIndex: 'ppi_cg_f_yoy',
    key: 'ppi_cg_f_yoy',
    width: 150,
  },

  {
    title: '生活资料：衣着类：当月同比',
    dataIndex: 'ppi_cg_c_yoy',
    key: 'ppi_cg_c_yoy',
    width: 150,
  },

  {
    title: '生活资料：一般日用品类：当月同比',
    dataIndex: 'ppi_cg_adu_yoy',
    key: 'ppi_cg_adu_yoy',
    width: 150,
  },

  {
    title: '生活资料：耐用消费品类：当月同比',
    dataIndex: 'ppi_cg_dcg_yoy',
    key: 'ppi_cg_dcg_yoy',
    width: 150,
  },

  {
    title: '全部工业品：环比',
    dataIndex: 'ppi_mom',
    key: 'ppi_mom',
    width: 150,
  },

  {
    title: '生产资料：环比',
    dataIndex: 'ppi_mp_mom',
    key: 'ppi_mp_mom',
    width: 150,
  },

  {
    title: '生产资料：采掘业：环比',
    dataIndex: 'ppi_mp_qm_mom',
    key: 'ppi_mp_qm_mom',
    width: 150,
  },

  {
    title: '生产资料：原料业：环比',
    dataIndex: 'ppi_mp_rm_mom',
    key: 'ppi_mp_rm_mom',
    width: 150,
  },

  {
    title: '生产资料：加工业：环比',
    dataIndex: 'ppi_mp_p_mom',
    key: 'ppi_mp_p_mom',
    width: 150,
  },

  {
    title: '生活资料：环比',
    dataIndex: 'ppi_cg_mom',
    key: 'ppi_cg_mom',
    width: 150,
  },

  {
    title: '生活资料：食品类：环比',
    dataIndex: 'ppi_cg_f_mom',
    key: 'ppi_cg_f_mom',
    width: 150,
  },

  {
    title: '生活资料：衣着类：环比',
    dataIndex: 'ppi_cg_c_mom',
    key: 'ppi_cg_c_mom',
    width: 150,
  },

  {
    title: '生活资料：一般日用品类：环比',
    dataIndex: 'ppi_cg_adu_mom',
    key: 'ppi_cg_adu_mom',
    width: 150,
  },

  {
    title: '生活资料：耐用消费品类：环比',
    dataIndex: 'ppi_cg_dcg_mom',
    key: 'ppi_cg_dcg_mom',
    width: 150,
  },

  {
    title: '全部工业品：累计同比',
    dataIndex: 'ppi_accu',
    key: 'ppi_accu',
    width: 150,
  },

  {
    title: '生产资料：累计同比',
    dataIndex: 'ppi_mp_accu',
    key: 'ppi_mp_accu',
    width: 150,
  },

  {
    title: '生产资料：采掘业：累计同比',
    dataIndex: 'ppi_mp_qm_accu',
    key: 'ppi_mp_qm_accu',
    width: 150,
  },

  {
    title: '生产资料：原料业：累计同比',
    dataIndex: 'ppi_mp_rm_accu',
    key: 'ppi_mp_rm_accu',
    width: 150,
  },

  {
    title: '生产资料：加工业：累计同比',
    dataIndex: 'ppi_mp_p_accu',
    key: 'ppi_mp_p_accu',
    width: 150,
  },

  {
    title: '生活资料：累计同比',
    dataIndex: 'ppi_cg_accu',
    key: 'ppi_cg_accu',
    width: 150,
  },

  {
    title: '生活资料：食品类：累计同比',
    dataIndex: 'ppi_cg_f_accu',
    key: 'ppi_cg_f_accu',
    width: 150,
  },

  {
    title: '生活资料：衣着类：累计同比',
    dataIndex: 'ppi_cg_c_accu',
    key: 'ppi_cg_c_accu',
    width: 150,
  },

  {
    title: '生活资料：一般日用品类：累计同比',
    dataIndex: 'ppi_cg_adu_accu',
    key: 'ppi_cg_adu_accu',
    width: 150,
  },

  {
    title: '生活资料：耐用消费品类：累计同比',
    dataIndex: 'ppi_cg_dcg_accu',
    key: 'ppi_cg_dcg_accu',
    width: 150,
  },
]

const PpiList : React.FC<PpiListProps> = (props) =>{
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
  const handle_query = ()=>{
    let _params = {
      m : m,
      start_m : start_m,
      end_m : end_m
    }
    props.queryData(_params)
  }

  return (
    <div>
      <h1>工业生产者出厂价格指数(ppi)</h1>
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
          <Button type="primary" htmlType="submit" onClick={ handle_query }>查询</Button>
        </Form.Item>
      </Form>
      <Table dataSource={ props.ppilist_datasource } columns={ ppilist_columns } pagination={{ pageSize: 50 }} scroll={{  x:3000, y: 480 }} ></Table>
    </div>
  )
}

export default PpiList
