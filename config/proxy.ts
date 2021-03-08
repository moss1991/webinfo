/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://127.0.0.1:8081',
      changeOrigin: true,
      pathRewrite: { '^/': '' },
    },
    // '/web/': {
    //   target: 'http://127.0.0.1:8081/web',
    //   changeOrigin: true,
    //   pathRewrite: { '^/web': '' },
    // },
    // '/stock/': {
    //   target: 'http://127.0.0.1:8081/stock',
    //   changeOrigin: true,
    //   pathRewrite: { '^/stock': '' },
    // },
    // '/futures/': {
    //   target: 'http://127.0.0.1:8081/futures',
    //   changeOrigin: true,
    //   pathRewrite: { '^/futures': '' },
    // },
    // // '/cninfo/': {
    // //   target: 'http://127.0.0.1:8081/cninfo',
    // //   changeOrigin: true,
    // //   pathRewrite: { '^/cninfo': '' },
    // // },
    // '/econ/': {
    //   target: 'http://127.0.0.1:8081/econ',
    //   changeOrigin: true,
    //   pathRewrite: { '^/econ': '' },
    // },
    // '/haiguan/': {
    //   target: 'http://127.0.0.1:8081/haiguan',
    //   changeOrigin: true,
    //   pathRewrite: { '^/haiguan': '' },
    // },
  },
  test: {
    // '/webinfo/':{
    //   target: 'http://127.0.0.1:8081/webinfo',
    //   changeOrigin: true,
    //   pathRewrite: { '^': '' },
    // },
    // '/api/': {
    //   target: 'https://preview.pro.ant.design',
    //   changeOrigin: true,
    //   pathRewrite: { '^': '' },
    // },

    // '/api/': {
    //   target: 'https://preview.pro.ant.design',
    //   changeOrigin: true,
    //   pathRewrite: { '^': '' },
    // },
    // '/web/': {
    //   target: 'http://127.0.0.1:8081/web',
    //   changeOrigin: true,
    //   pathRewrite: { '^/web': '' },
    // },
    // '/stock/': {
    //   target: 'http://127.0.0.1:8081/stock',
    //   changeOrigin: true,
    //   pathRewrite: { '^/stock': '' },
    // },
    // '/futures/': {
    //   target: 'http://127.0.0.1:8081/futures',
    //   changeOrigin: true,
    //   pathRewrite: { '^/futures': '' },
    // },
    // '/cninfo/': {
    //   target: 'http://127.0.0.1:8081/cninfo',
    //   changeOrigin: true,
    //   pathRewrite: { '^/cninfo': '' },
    // },
    // '/econ/': {
    //   target: 'http://127.0.0.1:8081/econ',
    //   changeOrigin: true,
    //   pathRewrite: { '^/econ': '' },
    // },
    // '/haiguan/': {
    //   target: 'http://127.0.0.1:8081/haiguan',
    //   changeOrigin: true,
    //   pathRewrite: { '^/haiguan': '' },
    // },

  },
  pre: {
    // '/webinfo/':{
    //   target: 'http://127.0.0.1:8081/webinfo',
    //   changeOrigin: true,
    //   pathRewrite: { '^': '' },
    // },
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    // '/web/': {
    //   target: 'http://127.0.0.1:8081/web',
    //   changeOrigin: true,
    //   pathRewrite: { '^/web': '' },
    // },
    // '/stock/': {
    //   target: 'http://127.0.0.1:8081/stock',
    //   changeOrigin: true,
    //   pathRewrite: { '^/stock': '' },
    // },
    // '/futures/': {
    //   target: 'http://127.0.0.1:8081/futures',
    //   changeOrigin: true,
    //   pathRewrite: { '^/futures': '' },
    // },
    // '/cninfo/': {
    //   target: 'http://127.0.0.1:8081/cninfo',
    //   changeOrigin: true,
    //   pathRewrite: { '^/cninfo': '' },
    // },
    // '/econ/': {
    //   target: 'http://127.0.0.1:8081/econ',
    //   changeOrigin: true,
    //   pathRewrite: { '^/econ': '' },
    // },
    // '/haiguan/': {
    //   target: 'http://127.0.0.1:8081/haiguan',
    //   changeOrigin: true,
    //   pathRewrite: { '^/haiguan': '' },
    // },
  },
};
