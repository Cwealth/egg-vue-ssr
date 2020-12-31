'use strict';

const BaseControll = require('./base');

class BannerControll extends BaseControll {
  async list() {
    const { ctx } = this;
    const data = await ctx.service.banner.list(ctx.params());
    this.success(data);
  }

  async getItem() {
    const { ctx } = this;
    const result = await ctx.service.banner.getItem(ctx.params('id'));
    this.success(result);
  }

  async add() {
    const { ctx } = this;
    const rule = {
      name: { type: 'string', require: true },
    };
    ctx.validate(rule);
    const result = await ctx.service.banner.add(ctx.params());
    this.success(result);
  }

  async del() {
    const { ctx } = this;
    const result = await ctx.service.banner.del(ctx.params('id'));
    this.success(result);
  }

  async edit() {
    const { ctx } = this;
    await ctx.service.banner.edit(ctx.params());
    this.success('ok');
  }
}

module.exports = BannerControll;
