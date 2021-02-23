import React, { useState, useRef } from 'react';
import StockList from './components/StockInfo'
import TradeCalendar from './components/TradeCalendar'
import NameChange from './components/NameChange'
import StockCompany from './components/HsAndSz'
import { StockListItem , TradeCalendarItem , NameChangeItem , StockCompanyItem } from './data'
import { queryStockList, queryTradeCalendarData, queryNameChangeData, queryHsCompanyData } from './service'

const DemoList: React.FC = () => {
  const [ stock, setStock] = useState<StockListItem[]>([]);
  const [ trade_cal, setTradeCal] = useState<TradeCalendarItem[]>([]);
  const [ name_change , setNameChange ] = useState<NameChangeItem[]>([]);
  const [ sh_company_info , setShCompanyInfo ] = useState<StockCompanyItem[]>([]);
  const [ sz_company_info , setSzCompanyInfo ] = useState<StockCompanyItem[]>([]);


  let getDStockListData = ()=>{
    queryStockList().then((res)=>{
      console.log(res)
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        setStock( _data )
      }
    });
  }

  let getTradeCalendarData = (params:any) => {
    console.log(params)
    queryTradeCalendarData(params).then((res)=>{
      console.log(res)
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        setTradeCal(_data)
      }
    })
  }

  let getNameChangeData = (params:any) => {
    console.log(params)
    queryNameChangeData(params).then((res)=>{
      console.log(res)
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        setNameChange(_data)
      }
    })
  }

  let getHsCompanyInfo = ()=>{
    queryHsCompanyData({
      ts_type : 'sh'
    }).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        setShCompanyInfo(_data)
      }
    })

    queryHsCompanyData({
      ts_type : 'sz'
    }).then((res)=>{
      if(res.code == 200){
        let _data = JSON.parse(res.data)
        setSzCompanyInfo(_data)
      }
    })
  }

  return (
    <div>
      <h1>股票列表</h1>
      <StockList dataSource={ stock }  queryData={ ()=> getDStockListData() }></StockList>
      <h1>交易日历</h1>
      <TradeCalendar dataSource={ trade_cal } fromDate={ '20210101' } toDate={ '20210220' }
        queryData={(params:any)=> getTradeCalendarData(params)}></TradeCalendar>
      <h1>股票曾用名</h1>
      <NameChange dataSource={ name_change } ts_code={'600848.SH'} queryData={(params:any)=>{ getNameChangeData(params) }}></NameChange>
      <h1>上市公司信息</h1>
      <StockCompany sh_data_source={ sh_company_info } sz_data_source={ sz_company_info } queryData={ ()=>{ getHsCompanyInfo() } }></StockCompany>
    </div>
  );
}

export default DemoList;
