import React , { useState } from 'react';
import { Table , Form, Input, Select, Button } from 'antd';
import { futuresBaseItem } from '../data'

const { Option } = Select;

export type FuturesBaseProps = {
  futuresbase_datasoure : Array<futuresBaseItem>;
  queryData:any;
}

const futuresbase_columns = [
  {
    title: '合约代码',
    dataIndex: 'ts_code',
    key: 'ts_code',
    width: 150,
  },

  {
    title: '交易标识',
    dataIndex: 'symbol',
    key: 'symbol',
    width: 150,
  },

  {
    title: '交易市场',
    dataIndex: 'exchange',
    key: 'exchange',
    width: 150,
  },

  {
    title: '中文简称',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },

  {
    title: '合约产品代码',
    dataIndex: 'fut_code',
    key: 'fut_code',
    width: 150,
  },

  {
    title: '合约乘数',
    dataIndex: 'multiplier',
    key: 'multiplier',
    width: 150,
  },

  {
    title: '交易计量单位',
    dataIndex: 'trade_unit',
    key: 'trade_unit',
    width: 150,
  },

  {
    title: '交易单位(每手)',
    dataIndex: 'per_unit',
    key: 'per_unit',
    width: 150,
  },

  {
    title: '报价单位',
    dataIndex: 'quote_unit',
    key: 'quote_unit',
    width: 150,
  },

  {
    title: '最小报价单位说明',
    dataIndex: 'quote_unit_desc',
    key: 'quote_unit_desc',
    width: 200,
  },

  {
    title: '交割方式说明',
    dataIndex: 'd_mode_desc',
    key: 'd_mode_desc',
    width: 200,
  },

  {
    title: '上市日期',
    dataIndex: 'list_date',
    key: 'list_date',
    width: 150,
  },

  {
    title: '最后交易日期',
    dataIndex: 'delist_date',
    key: 'delist_date',
    width: 150,
  },

  {
    title: '交割月份',
    dataIndex: 'd_month',
    key: 'd_month',
    width: 150,
  },

  {
    title: '最后交割日',
    dataIndex: 'last_ddate',
    key: 'last_ddate',
    width: 150,
  },

  {
    title: '交易时间说明',
    dataIndex: 'trade_time_desc',
    key: 'trade_time_desc',
    width: 300,
  },
]

const FuturesBase : React.FC<FuturesBaseProps> = (props) =>{
  const [ exchange , set_exchange ] = useState<string>('DCE')
  const [ fut_type , set_fut_type] = useState<string>('')

  const handleClick = ()=>{
    props.queryData({
      exchange : exchange,
      fut_type : fut_type
    })
  }
  const handleExchangeChange = (value:string)=>{
    set_exchange(value)
  }
  const handleFutTypeChange = (value:string)=>{
    set_fut_type(value)
  }
  return (
    <div>
      <Form name='futuresbase_form_controls' layout='inline'>
        <Form.Item>
          <Select defaultValue="DCE" style={{ width: 240 }} onChange={ handleExchangeChange }>
            <Option value="CFFEX">CFFEX-中金所</Option>
            <Option value="DCE">DCE-大商所</Option>
            <Option value="CZCE">CZCE-郑商所</Option>
            <Option value="SHFE">SHFE-上期所</Option>
            <Option value="INE">INE-上海国际能源交易中心</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Select defaultValue="" style={{ width: 240 }} onChange={ handleFutTypeChange }>
            <Option value="">默认取全部</Option>
            <Option value="1">1 普通合约</Option>
            <Option value="2">2 主力与连续合约</Option>
          </Select>
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" onClick={ handleClick }>查询</Button>
        </Form.Item>
      </Form>

      <Table dataSource={ props.futuresbase_datasoure } columns={ futuresbase_columns} pagination={{ pageSize: 50 }} scroll={{  x:1500, y: 480 }} ></Table>
    </div>
  )
}

export default FuturesBase
