'use strict';

const BaseControll = require('./base');

class NewsControll extends BaseControll {
  async list() {
    const { ctx } = this;
    const params = ctx.params();
    const page = params.page || 1;
    const limit = params.limit || 10;
    const order = params.order === 1 ? [ 'createTime', 'DESC' ] : [ 'sortId', 'ASC' ];
    const realmName = ctx.request.header.origin.split('//')[1];
    const realm = await ctx.service.realm.getOne({ name: realmName });
    if (!realm) {
      this.success([]);
      return;
    }
    params.realmId = realm.id;
    const countPromise = ctx.service.news.count(params, page, limit);
    const dataPromise = ctx.service.news.list(params, page, limit, order);
    const count = await countPromise;
    let data = await dataPromise;
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
    let result = await ctx.service.news.getItem(ctx.params());
    const obj = result.dataValues;
    result = {
      ...obj,
      createTime: ctx.helper.timestamp(obj.createTime),
      updateTime: ctx.helper.timestamp(obj.updateTime),
    };
    this.success(result);
  }

  async add() {
    const { ctx } = this;
    const rule = {
      title: { type: 'string', require: true },
      imgUrl: { type: 'string', require: true },
    };
    ctx.validate(rule);
    const params = ctx.helper.unPick(ctx.params(), [ 'createTime', 'updateTime' ]);
    const result = await ctx.service.news.add(params);
    this.success(result);
  }

  async del() {
    const { ctx } = this;
    const result = await ctx.service.news.del(ctx.params('id'));
    this.success(result);
  }

  async edit() {
    const { ctx } = this;
    const rule = {
      title: { type: 'string', require: true },
      imgUrl: { type: 'string', require: true },
    };
    ctx.validate(rule);
    const params = ctx.helper.unPick(ctx.params(), [ 'createTime', 'updateTime' ]);
    await ctx.service.news.edit(params);
    this.success('ok');
  }
}

module.exports = NewsControll;
