import React , { useState , useRef , useLayoutEffect } from 'react';
import { Table , Form, Input, Select, Button, DatePicker } from 'antd';

import { FuturesIndexDailyItem } from '../data'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { xor } from 'lodash';

type ComponentProps = {
  dataSource:Array<any>;
  // ts_code: string;
}

const formate_chart_datasoure = (prop_datasource:any)=>{
  let chart_datasoure = Array<any>()

  if(prop_datasource){
    prop_datasource.forEach((elem:any)=>{
      let _elem = elem
      if(_elem.trade_date){
        let _year = _elem.trade_date.substring(0,4),
          _month = _elem.trade_date.substring(4,6),
          _day = _elem.trade_date.substring(6,8);
        _elem.trade_date = new Date(_year,_month,_day)
        _elem.close = ""+_elem.close
        chart_datasoure.push(_elem)
      }
    })
    // console.log(chart_datasoure)
    return chart_datasoure;
  }
  else{
    return null
  }
}

const DailyChart: React.FC<ComponentProps> = (props) =>{
  const _chart = useRef(null);
  const _data = Array<any>();

  const _draw_chart = ()=>{
    let x = am4core.create("chartdiv", am4charts.XYChart);
    x.padding(0, 10, 0, 10);
    x.data = _data;
    // the following line makes value axes to be arranged vertically.
    x.leftAxesContainer.layout = "vertical";
    // uncomment this line if you want to change order of axes
    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "trade_date";
    series.dataFields.valueY = "close";
    series.tooltipText = "{valueY.value}";
    // series.name = "test series name";

    let series2 = x.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "trade_date";
    series2.dataFields.valueY = "settle";
    series2.tooltipText = "{valueY.value}";
    // series.name = "test series name";

    x.cursor = new am4charts.XYCursor();
    return x;
  }
  useLayoutEffect(() => {
    let x = _draw_chart()
    _chart.current = x;
    // console.log(_chart)
    return () => {
      x.dispose();
    };
  },[])

  useLayoutEffect(() => {
    _chart.current.data = formate_chart_datasoure(props.dataSource);
    console.log(_chart)
  }, [props.dataSource]);

  return (
    <div>
      <h1>TS指数:{ props.ts_code } 日线行情（收盘价和结算价）</h1>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  )
}
export default DailyChart
