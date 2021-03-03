import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { xor } from 'lodash';


const formate_chart_datasoure = (key:string,prop_datasource:any)=>{
  let chart_datasoure = Array<any>()

  if(prop_datasource){
    prop_datasource.forEach((elem:any)=>{
      let _elem = elem
      if(_elem[key]){
        let _year = _elem[key].substring(0,4),
          _month = _elem[key].substring(4,6),
          _day = _elem[key].substring(6,8);
        _elem[key] = new Date(_year,_month,_day)
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

type LineChartItem = {
  dateX:any;
  valueY:any;
}

const _draw_line_chart = (lines:LineChartItem[])=>{
  let x = am4core.create("chartdiv", am4charts.XYChart);
  x.padding(0, 10, 0, 10);
  x.data = [];
  x.leftAxesContainer.layout = "vertical";
  let dateAxis = x.xAxes.push(new am4charts.DateAxis());
  let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
  let series = []
  lines.forEach(element => {
    let _series = x.series.push(new am4charts.LineSeries());
    _series.dataFields.dateX = element.dateX;
    _series.dataFields.valueY = element.valueY;
    _series.tooltipText = "{valueY.value}";
    series.push(_series)
  });
  x.cursor = new am4charts.XYCursor();
  return x;
}

const amcharts = {
  formate_chart_datasoure:formate_chart_datasoure,
  _draw_line_chart:_draw_line_chart
}


export default amcharts
