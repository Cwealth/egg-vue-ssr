'use strict';

const BaseController = require('./base');

class FileController extends BaseController {
  async uploadFile() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    const url = await ctx.service.file.uploadFile(file);
    this.success({ url });
  }
}

module.exports = FileController;
