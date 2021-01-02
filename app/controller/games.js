'use strict';

const BaseControll = require('./base');

class GamesControll extends BaseControll {

  async ssr() {
   const { ctx } = this;
    const params = ctx.params();
    const page = params.page || 1;
    const limit = params.limit || 10;
    const order = params.order === 1 ? [ 'createTime', 'DESC' ] : [ 'sortId', 'ASC' ];
    const count = await ctx.service.games.count(params);
    let data = await ctx.service.games.list(params, page, limit, order);
    const obj = {list: data}
    await this.ctx.render('game/game.js', obj);
  }

  async list() {
    const { ctx } = this;
    const params = ctx.params();
    const page = params.page || 1;
    const limit = params.limit || 10;
    const order = params.order === 1 ? [ 'createTime', 'DESC' ] : [ 'sortId', 'ASC' ];
    const count = await ctx.service.games.count(params);
    let data = await ctx.service.games.list(params, page, limit, order);
    data = data.map(item => {
      const obj = item.dataValues;
      return {
        ...obj,
        createTime: ctx.helper.timestamp(obj.createTime),
        updateTime: ctx.helper.timestamp(obj.updateTime),
      };
    });
    this.pageSuccess(data, count);
  }

  async getItem() {
    const { ctx } = this;
    const result = await ctx.service.games.getItem(ctx.params('id'));
    this.success(result);
  }

}

module.exports = GamesControll;
