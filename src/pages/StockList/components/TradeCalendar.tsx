import React , { useState } from 'react';
import { Table , Form, Input, Select, Button } from 'antd';

import { TradeCalendarItem } from '../data'

export type TradeListProps = {
  dataSource:Array<TradeCalendarItem>;
  fromDate:string;
  toDate:string;
  queryData:any;
}

const trade_columns = [
  {
    title: '交易所',
    dataIndex: 'exchange',
    key: 'exchange',
    width: 150,
  },
  {
    title: '日历日期',
    dataIndex: 'cal_date',
    key: 'cal_date',
    width: 150,
  },
  {
    title: '是否交易',
    dataIndex: 'is_open',
    key: 'is_open',
    width: 150,
  },
  {
    title: '上一个交易日',
    dataIndex: 'pretrade_date',
    key: 'pretrade_date',
    width: 150,
  }
];

const TradeCalendar : React.FC<TradeListProps> = (props) =>{
  const handleClick = ()=>{
    props.queryData({
      from_date : props.fromDate,
      to_date : props.toDate
    })
  }

  return (
    <div>
      <Form name="customized_form_controls" layout="inline"
        initialValues={{
          fromDate: props.fromDate,
          toDate: props.toDate
        }}>
        <Form.Item>
          <Input
            type="text"
            value={props.fromDate}
            style={{
              width: 100,
            }}
          />
          <Input
            type="text"
            value={ props.toDate }
            style={{
              width: 100,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handleClick }>查询</Button>
        </Form.Item>
      </Form>
      <Table dataSource={ props.dataSource } columns={ trade_columns} pagination={{ pageSize: 50 }} scroll={{  y: 480 }} ></Table>
    </div>
  )
}

export default TradeCalendar;
