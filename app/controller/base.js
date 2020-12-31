'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data = {}) {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data,
    };
  }

  pageSuccess(data, count) {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data,
      count,
    };
  }

  error(errMsg = '') {
    const { ctx } = this;
    ctx.body = {
      code: 500,
      errMsg,
    };
  }
}

module.exports = BaseController;
