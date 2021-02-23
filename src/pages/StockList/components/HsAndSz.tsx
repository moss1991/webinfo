import React, { useState , useEffect } from 'react';
import { Tabs, Table, Input, Button } from 'antd';

import { StockCompanyItem } from '../data';

export type StockCompanyProps = {
  sh_data_source : Array<StockCompanyItem>;
  sz_data_source : Array<StockCompanyItem>;
  queryData : any;
}
const { TabPane } = Tabs;

const company_columns = [
  {
    title: 'TS代码',
    dataIndex: 'ts_code',
    key: 'ts_code',
    width: 150,
  },
  {
    title: '沪深港通类型',
    dataIndex: 'hs_type',
    key: 'hs_type',
    width: 200,
  },
  {
    title: '纳入日期',
    dataIndex: 'in_date',
    key: 'in_date',
    width: 150,
  },
  {
    title: '剔除日期',
    dataIndex: 'out_date',
    key: 'out_date',
    width: 150,
  },
  {
    title: '是否最新',
    dataIndex: 'is_new',
    key: 'is_new',
    width: 150,
  }
]

const StockCompany : React.FC<StockCompanyProps> = (props) =>{
  const handlePanelChange = ()=>{}

  useEffect(()=>{
    // props.queryData()
  })

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={ handlePanelChange }>
        <TabPane tab="沪市" key="1">
          <Table dataSource={ props.sh_data_source } columns={ company_columns} pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
        </TabPane>
        <TabPane tab="深市" key="2">
          <Table dataSource={ props.sz_data_source } columns={ company_columns} pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
        </TabPane>
        {/* <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane> */}
      </Tabs>
    </div>
  )
}

export default StockCompany;
