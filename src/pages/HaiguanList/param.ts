const IMPORT_OR_EXPORT = {
  0 : '进口',
  1 : '出口'
}

const CORD_TYPE = {
  0 : '4位编码',
  1 : '8位编码'
}

const MONTH_TYPE = {
  0 : '当月值',
  1 : '累计值'
}

const table_params = {
  columns : [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      width: 150,
    },
    {
      title: '商品编码',
      dataIndex: 'product_id',
      key: 'product_id',
      width: 150,
    },
    {
      title: '商品名称',
      dataIndex: 'product_name',
      key: 'product_name',
      width: 400,
    },
    {
      title: '贸易伙伴编码',
      dataIndex: 'trade_country_id',
      key: 'trade_country_id',
      width: 150,
    },
    {
      title: '贸易伙伴名称',
      dataIndex: 'trade_country_name',
      key: 'trade_country_name',
      width: 150,
    },
    {
      title: '贸易方式编码',
      dataIndex: 'trade_id',
      key: 'trade_id',
      width: 150,
    },
    {
      title: '贸易方式名称',
      dataIndex: 'trade_name',
      key: 'trade_name',
      width: 150,
    },

    {
      title: '注册地编码',
      dataIndex: 'register_id',
      key: 'register_id',
      width: 150,
    },

    {
      title: '第一计量单位',
      dataIndex: 'first_unit',
      key: 'first_unit',
      width: 150,
    },
    {
      title: '第一数量',
      dataIndex: 'first_price',
      key: 'first_price',
      width: 150,
    },
    {
      title: '第二计量单位',
      dataIndex: 'second_unit',
      key: 'second_unit',
      width: 150,
    },
    {
      title: '第二数量',
      dataIndex: 'second_price',
      key: 'second_price',
      width: 150,
    },
    {
      title: '美元',
      dataIndex: 'price',
      key: 'price',
      width: 150,
    },
    {
      title: '年',
      dataIndex: 'year',
      key: 'year',
      width: 150,
    },
    {
      title: '开始月份',
      dataIndex: 'start_month',
      key: 'start_month',
      width: 150,
    },
    {
      title: '结束月份',
      dataIndex: 'end_month',
      key: 'end_month',
      width: 150,
    },
    {
      title: '进出口类型',
      dataIndex: 'import_type',
      key: 'import_type',
      width: 150,
      render:(text:any, record:any) => IMPORT_OR_EXPORT[text]
    },
    {
      title: '编码类型',
      dataIndex: 'code_type',
      key: 'code_type',
      width: 150,
      render:(text:any, record:any) => CORD_TYPE[text]
    },
    {
      title: '当月值/累计值',
      dataIndex: 'month_type',
      key: 'month_type',
      width: 150,
      render:(text:any, record:any) => MONTH_TYPE[text]
    },
    {
      title: '数据采集时间',
      dataIndex: 'create_time',
      key: 'create_time',
      width: 300,
    },
  ],
  // page_size : 50,
  width : 3000,
  height : 480
}

export {
  table_params
}
