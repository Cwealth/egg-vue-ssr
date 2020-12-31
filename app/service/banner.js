'use strict';

const BaseService = require('./base');

class BannerService extends BaseService {

  // 查询条件
  condition(data) {
    const option = {};
    if (data.id) option.id = data.id;
    if (data.typeId) option.typeId = data.typeId;
    return option;
  }

  async list(params) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsBanner.findAll({
        where: {
          ...this.condition(params),
        },
      });
      return result;
    });
  }

  async count(params, page, limit) {
    const { ctx } = this;
    const result = await ctx.model.CmsBanner.count({
      where: {
        ...this.condition(params),
      },
      limit,
      offset: (page - 1) * limit,
    });
    return result;
  }

  async getItem(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsBanner.findByPk(id);
      return result;
    });
  }

  async add(params) {
    console.log(params);
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsBanner.create(params);
      return result;
    });
  }

  async del(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsBanner.destroy({
        where: {
          id,
        },
      });
      return result;
    });
  }

  async edit(params) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsBanner.update(params, {
        where: {
          id: params.id,
        },
      });
      return result;
    });
  }
}

module.exports = BannerService;

