'use strict';

const BaseControll = require('./base');

class BannerTypeControll extends BaseControll {
  async list() {
    const { ctx } = this;
    const params = ctx.params();
    const page = params.page || 1;
    const limit = params.limit || 10;
    const count = await ctx.service.bannerType.count(params, page, limit);
    const data = await ctx.service.bannerType.list(params, page, limit);
    this.pageSuccess(data, count);
  }

  async getItem() {
    const { ctx } = this;
    const result = await ctx.service.bannerType.getItem(ctx.params('id'));
    this.success(result);
  }

  async add() {
    const { ctx } = this;
    const rule = {
      name: { type: 'string', require: true },
    };
    ctx.validate(rule);
    const result = await ctx.service.bannerType.add(ctx.params());
    this.success(result);
  }

  async del() {
    const { ctx } = this;
    const result = await ctx.service.bannerType.del(ctx.params('id'));
    this.success(result);
  }

  async edit() {
    const { ctx } = this;
    await ctx.service.bannerType.edit(ctx.params());
    this.success('ok');
  }

  async all() {
    const { ctx } = this;
    const result = await ctx.service.bannerType.all();
    this.success(result);
  }
}

module.exports = BannerTypeControll;

