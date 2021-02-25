// import FuturesList from '../src/pages/FuturesList'
// import StockList from '../src/pages/StockList'

export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
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

              {
                name: 'list.stock-list',
                icon: 'table',
                path: '/stock',
                component: './StockList',
                // component:StockList
              },

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
                // children : [
                //   {
                //     name: 'all',
                //     icon: 'table',
                //     path: '/all',
                //     component: './FuturesList/TestSubPage',
                //   },
                // ]
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
