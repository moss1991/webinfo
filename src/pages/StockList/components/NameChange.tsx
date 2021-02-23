import React , { useState } from 'react';
import { Table , Form, Input, Button } from 'antd';
import { NameChangeItem } from '../data'

export type NameChangeProps = {
  dataSource : Array<NameChangeItem>;
  ts_code:string;
  queryData:any;
}

const namechage_columns = [
  {
    title: 'TS代码',
    dataIndex: 'ts_code',
    key: 'ts_code',
    width: 150,
  },
  {
    title: '证券名称',
    dataIndex: 'name',
    key: 'name',
    width: 250,
  },
  {
    title: '开始日期',
    dataIndex: 'start_date',
    key: 'start_date',
    width: 150,
  },
  {
    title: '结束日期',
    dataIndex: 'end_date',
    key: 'end_date',
    width: 150,
  },
  {
    title: '公告日期',
    dataIndex: 'ann_date',
    key: 'ann_date',
    width: 150,
  },
  {
    title: '变更原因',
    dataIndex: 'change_reason',
    key: 'change_reason',
    width: 300,
  },
]

const NameChange : React.FC<NameChangeProps> = (props) =>{
  const handleQueryClick = ()=>{
    props.queryData({
      ts_code : props.ts_code
    })
  }
  return (
    <div>
    <Form name="namechange_form_controls" layout="inline"
      initialValues={{
        ts_code: props.ts_code
      }}>
        <Form.Item>
          <Input
            type="text"
            value={ props.ts_code }
            style={{
              width: 100,
            }} />
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" onClick={ handleQueryClick }>查询</Button>
        </Form.Item>
    </Form>
    <Table dataSource={ props.dataSource } columns={ namechage_columns} pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
    </div>
  )
}

export default NameChange;
