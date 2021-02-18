import React from 'react';
import { Modal , Table } from 'antd';

export type XinguanProps = {}

const XinguanList: React.FC<XinguanProps> = (props) => {
  const dataSource = [
    {
      "name": "中国",
      "value": "90498",
      "susNum": "3",
      "deathNum": "4735",
      "cureNum": "85252",
      "econNum": "511"
    }
  ];

  const columns = [
    {
      title: '国家',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '累计病例',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: '现有病例',
      dataIndex: 'susNum',
      key: 'susNum',
    },
    {
      title: '死亡总数',
      dataIndex: 'deathNum',
      key: 'deathNum',
    },
    {
      title: '治愈总数',
      dataIndex: 'cureNum',
      key: 'cureNum',
    },
    {
      title: '疑似病例',
      dataIndex:'econNum',
      key: 'econNum',
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns}></Table>
  );
}

export default XinguanList;
