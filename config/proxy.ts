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
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/webinfo/': {
      target: 'http://127.0.0.1:8081/webinfo',
      changeOrigin: true,
      pathRewrite: { '^/webinfo': '' },
    },
    '/stockinfo/': {
      target: 'http://127.0.0.1:8081/stockinfo',
      changeOrigin: true,
      pathRewrite: { '^/stockinfo': '' },
    },
    '/futuresinfo/': {
      target: 'http://127.0.0.1:8081/futuresinfo',
      changeOrigin: true,
      pathRewrite: { '^/futuresinfo': '' },
    },
    '/cninfo/': {
      target: 'http://127.0.0.1:8081/cninfo',
      changeOrigin: true,
      pathRewrite: { '^/cninfo': '' },
    },
    '/econ/': {
      target: 'http://127.0.0.1:8081/econ',
      changeOrigin: true,
      pathRewrite: { '^/econ': '' },
    },
  },
  test: {
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
  },
  pre: {
    // '/webinfo/':{
    //   target: 'http://127.0.0.1:8081/webinfo',
    //   changeOrigin: true,
    //   pathRewrite: { '^': '' },
    // },
    '/api/': {
      target: 'http://localhost:8080/santa',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
