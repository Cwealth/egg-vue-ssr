'use strict';

const BaseControll = require('./base');

class GameOperateControll extends BaseControll {
  async list() {
    const { ctx } = this;
    const params = ctx.params();
    const page = params.page || 1;
    const limit = params.limit || 10;
    const count = await ctx.service.gameOperate.count(params, page, limit);
    const data = await ctx.service.gameOperate.list(params, page, limit);
    this.pageSuccess(data, count);
  }

  async getItem() {
    const { ctx } = this;
    const result = await ctx.service.gameOperate.getItem(ctx.params('id'));
    this.success(result);
  }

  async add() {
    const { ctx } = this;
    const rule = {
      name: { type: 'string', require: true },
    };
    ctx.validate(rule);
    const result = await ctx.service.gameOperate.add(ctx.params());
    this.success(result);
  }

  async del() {
    const { ctx } = this;
    const result = await ctx.service.gameOperate.del(ctx.params('id'));
    this.success(result);
  }

  async edit() {
    const { ctx } = this;
    await ctx.service.gameOperate.edit(ctx.params());
    this.success('ok');
  }

  async all() {
    const { ctx } = this;
    const result = await ctx.service.gameOperate.all();
    this.success(result);
  }
}

module.exports = GameOperateControll;
