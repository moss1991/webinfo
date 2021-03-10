import React, { useState, useRef , useLayoutEffect } from 'react';
import { Table , Form, Input, Select, Button , DatePicker ,Pagination} from 'antd';

import type { HaiguanItem } from './data';
import { table_params } from './param'
// import RateQueryForm from './components/RateQueryForm'
import { queryHaiguanLimitList , queryHaiguanSum} from './service';

const HaiguanListPage:React.FC = ()=>{
  const [ haiguan , set_haiguan ] = useState<HaiguanItem[]>([])
  const [ sum , set_sum ] = useState(142684)
  const [ page , set_page ] = useState(1)

  const getHaiguanData = ()=>{
    queryHaiguanLimitList({
      page: page,
      pagesize: 50
    }).then((res)=>{
      set_haiguan(res.data)
    })
  }

  const getHaiguanSum = ()=>{
    // queryHaiguanSum().then((res)=>{
    //   set_sum(res.data)
    //   getHaiguanData()
    // })
    getHaiguanData()
  }

  const handle_page_change = (page:any)=>{
    set_page(page)
    set_haiguan([])
    getHaiguanData()
  }

  useLayoutEffect(() => {
    getHaiguanSum()
    return () => {};
  },[])

  return (
    <div>
      <h1>2020年海关进出口数据，共计：{ sum }</h1>
      {/* <Form name='futuresbase_form_controls' layout='inline'>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={ ()=>{ getHaiguanData() }}>查询</Button>
        </Form.Item>
      </Form> */}
      <Pagination defaultCurrent={1} total={sum / 50  }  onChange={ (page)=>{ handle_page_change(page) }}/>
      <Table  dataSource={ haiguan }
              columns={ table_params.columns }
              scroll={{  x:table_params.width, y: table_params.height }}
              pagination={ false }></Table>

    </div>
  )
}
export default HaiguanListPage
