'use strict';
const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    },
    injectRes:[
      {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.min.css'
      },
      {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js'
      }
    ]
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.security = {
    csrf: {
      ignoreJSON: false,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken',
      headerName: 'x-csrf-token'
    },
    xframe: {
      enable: false,
    },
  };

  exports.jwt = {
    secret: 'canyun',
  };

  exports.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '53399',
    username: 'root',
    password: 'Ts123123',
    database: 'egg_gamedb',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };
  
  exports.redis = {
    client: {
      password: 'a',
      port: 6379,
      host: '127.0.0.1',
      db: 0,
    },
  };

  // add your user config here
  const userConfig = {
    salt: 'canyun',
    redisExpire: 60 * 60 * 24,
  };

  

  return exports;
};