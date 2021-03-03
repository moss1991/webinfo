import React , { useState , useRef , useLayoutEffect } from 'react';
import { Table , Form, Input, Select, Button, DatePicker } from 'antd';

import { CpiItem } from '../data'

import  amcharts  from '../../amcharts'

type ComponentProps = {
  dataSource:Array<any>;
  ts_code: string;
}

const CpiChart: React.FC<ComponentProps> = (props) =>{
  const _chart = useRef(null);
  const _data = Array<any>();
  const _lines = [
    { dateX : 'month' , valueY:'nt_val' }
  ]
  useLayoutEffect(() => {
    let x = amcharts._draw_line_chart(_lines)
    _chart.current = x;
    // console.log(_chart)
    return () => {
      x.dispose();
    };
  },[])

  useLayoutEffect(() => {
    _chart.current.data = amcharts.formate_chart_datasoure("month",props.dataSource);
    console.log(_chart)
  }, [props.dataSource]);

  return (
    <div>
      {/* <h1>TS指数:{ props.ts_code } 日线行情（收盘价和结算价）</h1> */}
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  )
}
export default CpiChart
