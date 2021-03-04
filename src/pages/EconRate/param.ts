const table_params = {
  columns : [
    {
      title: '日期',
      dataIndex: 'GDATU',
      key: 'GDATU',
      width: 150,
    },
    {
      title: '本币币种',
      dataIndex: 'L_CURRECNY',
      key: 'L_CURRECNY',
      width: 150,
    },
    {
      title: '目标币种',
      dataIndex: 'F_CURRENCY',
      key: 'F_CURRENCY',
      width: 150,
    },
    {
      title: '汇率',
      dataIndex: 'UKURS',
      key: 'UKURS',
      width: 150,
    }
  ],
  page_size : 50,
  width : 1500,
  height : 480
}

export {
  table_params
}
