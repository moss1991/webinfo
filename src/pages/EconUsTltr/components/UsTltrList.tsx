import React , { useState } from 'react';
import { Table , Form, Input, Select, Button , DatePicker } from 'antd';
import { UsTltrItem } from '../data'

export type ListProps = {
	datasource : Array<UsTltrItem>;
	queryData : any;
}

const _columns = [
  {
		title: '日期',
		dataIndex: 'date',
		key: 'date',
		width: 150,
  },
  {
		title: '收益率 LT COMPOSITE (>10 Yrs)',
		dataIndex: 'ltc',
		key: 'ltc',
		width: 150,
  },
  {
		title: '20年期CMT利率(TREASURY 20-Yr CMT)',
		dataIndex: 'cmt',
		key: 'cmt',
		width: 150,
  },
  {
		title: '外推因子',
		dataIndex: 'e_factor',
		key: 'e_factor',
		width: 150,
  },
]

const UsTltrList : React.FC<ListProps> = (props) =>{

  const [ date , set_date ] = useState<string>('')
  const [ start_date , set_start_date ] = useState<string>('20180101')
  const [ end_date , set_end_date ] = useState<string>('20200327')

  const handle_date = (value:any)=>{
    if(value){
      set_date(value.format('YYYYMMDD'))
    }
  }

  const handle_start_date = (value:any)=>{
    if(value){
      set_start_date(value.format('YYYYMMDD'))
    }
  }

  const handle_end_date = (value:any)=>{
    if(value){
      set_end_date(value.format('YYYYMMDD'))
    }
  }

  const handle_query_click = ()=>{
    let _params = {
      date: date,
      start_date : start_date,
      end_date : end_date
    }
    props.queryData(_params)
  }

	return (
		<div>
			<h1>美国长期国债利率</h1>
      <Form name="tbr_form_controls" layout="inline">

        <Form.Item label="指定日期">
          <DatePicker onChange={ handle_date } />
        </Form.Item>
        <Form.Item label="开始日期">
          <DatePicker onChange={ handle_start_date } />
        </Form.Item>
        <Form.Item label="结束日期">
          <DatePicker onChange={ handle_end_date } />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handle_query_click }>查询</Button>
        </Form.Item>
      </Form>
			<Table dataSource={ props.datasource } columns={ _columns } pagination={{ pageSize: 50 }} scroll={{ x:1500, y: 480 }} ></Table>
		</div>
	)

}

export default UsTltrList
