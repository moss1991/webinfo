// import FuturesList from '../src/pages/FuturesList'
// import StockList from '../src/pages/StockList'

export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      // {
      //   path: '/user',
      //   component: '../layouts/UserLayout',
      //   routes: [
      //     {
      //       name: 'login',
      //       path: '/user/login',
      //       component: './User/login',
      //     },
      //   ],
      // },
      {
        path: '/',
        component: '../layouts/BlankLayout',
        // component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              // {
              //   name: 'list.table-list',
              //   icon: 'table',
              //   path: '/list',
              //   component: './TableList',
              // },

              // {
              //   name: 'list.demo-list',
              //   icon: 'table',
              //   path: '/demo',
              //   component: './DemoList',
              // },

              // {
              //   name: 'list.stock-list',
              //   icon: 'table',
              //   path: '/stock',
              //   component: './StockList',
              //   // component:StockList
              // },

              // {
              //   name: 'list.futures-list',
              //   icon: 'table',
              //   path: '/futures',
              //   component: './FuturesList',
              // },

              {
                name: 'list.futures-list',
                icon: 'table',
                path: '/futures',
                // component: './FuturesList',
                routes: [
                  {
                    path: '/futures/baseinfo',
                    name: 'baseinfo',
                    icon: 'smile',
                    component: './FuturesBaseInfo',
                  },
                  {
                    path: '/futures/daily',
                    name: 'daily',
                    icon: 'smile',
                    component: './FuturesDaily',
                  },
                  {
                    path: '/futures/holding',
                    name: 'holding',
                    icon: 'smile',
                    component: './FuturesHolding',
                  },
                  {
                    path: '/futures/wsr',
                    name: 'wsr',
                    icon: 'smile',
                    component: './FuturesWsr',
                  },

                  {
                    path: '/futures/settle',
                    name: 'settle',
                    icon: 'smile',
                    component: './FuturesSettle',
                  },
                  {
                    path: '/futures/indexdaily',
                    name: 'indexdaily',
                    icon: 'smile',
                    component: './FuturesIndexDaily',
                  },
                  {
                    path: '/futures/mapping',
                    name: 'mapping',
                    icon: 'smile',
                    component: './FuturesMapping',
                  },
                  {
                    path: '/futures/weeklydetail',
                    name: 'weeklydetail',
                    icon: 'smile',
                    component: './FuturesWeeklyDetail',
                  }
                ],
              },
              // {
              //   name: '外汇',
              //   icon: 'table',
              //   path: '/fx',
              //   // component: './FuturesList',
              //   routes: [
              //     {
              //       path: '/fx/base',
              //       name : "外汇基础信息",
              //       icon: 'smile',
              //     },
              //     {
              //       path: '/fx/daily',
              //       name : "外汇日线行情",
              //       icon: 'smile',
              //     },
              //   ]
              // },
              {
                name: 'list.economy',
                icon: 'table',
                path: '/economy',
                // component: './FuturesList',
                routes: [
                  {
                    path: '/economy/china',
                    name: 'cninfo',
                    icon: 'smile',
                    routes: [
                      // economy - rate
                      {
                        path: '/economy/china/rate',
                        name: 'rate',
                        icon: 'smile',
                        routes:[
                          {
                            path: '/economy/china/rate/rate1',
                            name: 'rate1',
                            icon: 'smile',
                            component: './EconRate',
                          },
                          // {
                          //   path: '/economy/china/rate/rate2',
                          //   name: 'rate2',
                          //   icon: 'smile',
                          //   // component: './FuturesWeeklyDetail',
                          // }
                        ]
                      },
                      // economy - gdp
                      {
                        path: '/economy/china/gdp',
                        name: 'gdp',
                        icon: 'smile',
                        component: './EconGdp',
                      },

                      // economy - keypoint cpi ppi
                      {
                        path: '/economy/china/keypoint',
                        name: 'keypoint',
                        icon: 'smile',
                        routes:[
                          {
                            path: '/economy/china/keypoint/cpi',
                            name: 'cpi',
                            icon: 'smile',
                            component: './EconCpi',
                          },
                          {
                            path: '/economy/china/keypoint/ppi',
                            name: 'ppi',
                            icon: 'smile',
                            component: './EconPpi',
                          },
                        ]
                      },
                      // economy - money
                      {
                        path: '/economy/china/money',
                        name: 'money',
                        icon: 'smile',
                        component: './EconMoney',
                        // route:[]
                      },
                    ]
                    // component: './FuturesWeeklyDetail',
                  },
                  {
                    path: '/economy/others',
                    name: 'others',
                    icon: 'smile',
                    routes:[
                      {
                        path: '/economy/others/tbr',
                        name: 'tbr',
                        icon: 'smile',
                        component: './EconUsTbr',
                      },
                      {
                        path: '/economy/others/tltr',
                        name: 'tltr',
                        icon: 'smile',
                        component: './EconUsTltr',
                      }
                    ]
                    // component: './FuturesWeeklyDetail',
                  }
                ]
              },

              {
                name: 'list.haiguan',
                icon: 'table',
                path: '/haiguan',
                component: './HaiguanList',
              },

              {
                name: 'list.systeminfo',
                icon: 'table',
                path: '/systeminfo',
                component: './SystemInfo',
              },

              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
