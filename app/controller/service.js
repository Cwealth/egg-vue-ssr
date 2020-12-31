'use strict';

const BaseControll = require('./base');

class ServiceControll extends BaseControll {
  async list() {
    const { ctx } = this;
    const map = new Map();
    const params = ctx.params();
    const page = params.page || 1;
    const limit = params.limit || 10;
    const countPromise = ctx.service.service.count(params, page, limit);
    const dataPromise = ctx.service.service.list(params, page, limit);
    const typePromise = ctx.service.gameType.all();
    const typeList = await typePromise;
    typeList.forEach(item => {
      const obj = item.dataValues;
      map.set(obj.id, obj.name);
    });
    const count = await countPromise;
    let data = await dataPromise;
    data = data.map(item => {
      const obj = item.dataValues;
      return {
        ...obj,
        typeName: map.get(obj.gameTypeId),
      };
    });
    this.pageSuccess(data, count);
  }

  async getItem() {
    const { ctx } = this;
    const result = await ctx.service.service.getItem(ctx.params('id'));
    this.success(result);
  }

  async add() {
    const { ctx } = this;
    const rule = {
      name: { type: 'string', require: true },
      gameId: { type: 'number', require: true },
      time: { type: 'number', require: true },
    };
    ctx.validate(rule);
    const result = await ctx.service.service.add(ctx.params());
    this.success(result);
  }

  async del() {
    const { ctx } = this;
    const result = await ctx.service.service.del(ctx.params('id'));
    this.success(result);
  }

  async edit() {
    const { ctx } = this;
    await ctx.service.service.edit(ctx.params());
    this.success('ok');
  }
}

module.exports = ServiceControll;
