import React , { useState } from 'react';
import { Table , Form, Input, Select, Button } from 'antd';
// import type { RateItem } from './data';

export type RateQueryFormProps = {
  queryData : any;
}

const RateQueryForm : React.FC<RateQueryFormProps> = (props) =>{
  const handle_query = ()=>{
    props.queryData()
  }
  return (
    <Form name='futuresbase_form_controls' layout='inline'>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={ handle_query }>查询</Button>
      </Form.Item>
    </Form>
  )
}

export default RateQueryForm
