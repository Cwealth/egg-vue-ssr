'use strict';

const BaseControll = require('./base');

class ConfigControll extends BaseControll {

  async getItem() {
    const { ctx } = this;
    const result = await ctx.service.config.getItem(ctx.params('configId'));
    this.success(result);
  }

  async edit() {
    const { ctx } = this;
    await ctx.service.config.edit(ctx.params());
    this.success('ok');
  }
}

module.exports = ConfigControll;
