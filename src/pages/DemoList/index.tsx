import React, { useState, useRef } from 'react';
import DataList from './components/Demo'
import XinguanList from './components/Xinguan'


const DemoList: React.FC = () => {
  return (
    <div>
      <DataList></DataList>
      <XinguanList></XinguanList>
    </div>
  );
}

export default DemoList;
