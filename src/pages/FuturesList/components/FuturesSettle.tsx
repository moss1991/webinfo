import React , { useState } from 'react';
import { Table , Form, Input, Select, Button, DatePicker } from 'antd';

import { FuturesWsrItem } from '../data'

export type FutureHoldingProps = {
  holding_data_source:Array<FuturesWsrItem>;
  queryData:any;
}

const _columns = []

const FuturesWsr : React.FC<FutureHoldingProps> = (props) =>{
  return (<div></div>)
}

export default FuturesWsr
