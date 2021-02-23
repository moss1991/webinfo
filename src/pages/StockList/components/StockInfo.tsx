import React from 'react';
import { Table , Form, Button } from 'antd';
// import { AntdTableColums } from '../../data.antd'
import { StockListItem } from '../data'

export type StockListProps = {
  dataSource:Array<StockListItem>
  queryData:any
}

const stock_columns = [
  {
    title: 'TS代码',
    dataIndex: 'ts_code',
    key: 'ts_code',
    width: 150,
  },
  {
    title: '股票代码',
    dataIndex: 'symbol',
    key: 'symbol',
    width: 150,
  },
  {
    title: '股票名称',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: '所在地域',
    dataIndex: 'area',
    key: 'area',
    width: 150,
  },
  {
    title: '所属行业',
    dataIndex: 'industry',
    key: 'industry',
    width: 150,
  },
  {
    title: '股票全称',
    dataIndex:'fullname',
    key: 'fullname',
    width: 500,
  },
  {
    title: '英文全称',
    dataIndex:'enname',
    key: 'enname',
    width: 500,
  },
  {
    title: '市场类型',
    dataIndex:'market',
    key: 'market',
    width: 150,
  },
  {
    title: '交易所代码',
    dataIndex:'exchange',
    key: 'exchange',
    width: 150,
  },
  {
    title: '交易货币',
    dataIndex:'curr_type',
    key: 'curr_type',
    width: 150,
  },
  {
    title: '上市状态',
    dataIndex:'list_status',
    key: 'list_status',
    width: 150,
  },
  {
    title: '上市日期',
    dataIndex:'list_date',
    key: 'list_date',
    width: 150,
  },
  {
    title: '退市日期',
    dataIndex:'delist_date',
    key: 'delist_date',
    width: 150,
  },
  {
    title: '是否沪深港通标的',
    dataIndex:'is_hs',
    key: 'is_hs',
    width: 250,
  },
];

const StockList : React.FC<StockListProps> = (props) =>{

  const handleClick = ()=>{
    //调用父组件的查询
    props.queryData();
  }

  return (
    <div>
      <Form name="customized_form_controls" layout="inline">
        <Button type="primary" htmlType="submit" onClick={ handleClick }>查询</Button>
      </Form>
      <Table dataSource={props.dataSource} columns={stock_columns} pagination={{ pageSize: 50 }} scroll={{ x: 1500 , y: 480 }} ></Table>
    </div>
  )
}

export default StockList;
