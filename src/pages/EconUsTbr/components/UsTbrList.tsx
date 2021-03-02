import React , { useState } from 'react';
import { Table , Form, Input, Select, Button , DatePicker } from 'antd';
import { UsTbrItem } from '../data'

export type ListProps = {
	datasource : Array<UsTbrItem>;
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
		title: '4周银行折现收益率',
		dataIndex: 'w4_bd',
		key: 'w4_bd',
		width: 150,
  },

  {
		title: '4周票面利率',
		dataIndex: 'w4_ce',
		key: 'w4_ce',
		width: 150,
  },

  {
		title: '8周银行折现收益率',
		dataIndex: 'w8_bd',
		key: 'w8_bd',
		width: 150,
  },

  {
		title: '8周票面利率',
		dataIndex: 'w8_ce',
		key: 'w8_ce',
		width: 150,
  },

  {
		title: '13周银行折现收益率',
		dataIndex: 'w13_bd',
		key: 'w13_bd',
		width: 150,
  },

  {
		title: '13周票面利率',
		dataIndex: 'w13_ce',
		key: 'w13_ce',
		width: 150,
  },

  {
		title: '26周银行折现收益率',
		dataIndex: 'w26_bd',
		key: 'w26_bd',
		width: 150,
  },

  {
		title: '26周票面利率',
		dataIndex: 'w26_ce',
		key: 'w26_ce',
		width: 150,
  },

  {
		title: '52周银行折现收益率',
		dataIndex: 'w52_bd',
		key: 'w52_bd',
		width: 150,
  },

  {
		title: '52周票面利率',
		dataIndex: 'w52_ce',
		key: 'w52_ce',
		width: 150,
	},
]
const UsTbrList : React.FC<ListProps> = (props) =>{

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
			<h1>美国短期国债利率</h1>
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
			<Table dataSource={ props.datasource } columns={ _columns } pagination={{ pageSize: 50 }} scroll={{ x:3000, y: 480 }} ></Table>
		</div>
	)

}

export default UsTbrList
