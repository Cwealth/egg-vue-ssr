'use strict';

const BaseService = require('./base');

class BannerService extends BaseService {

  // 查询条件
  condition(data) {
    const { app } = this;
    const { like } = app.Sequelize.Op;
    const option = {};
    if (data.name) option.name = { [like]: '%' + data.name + '%' };
    return option;
  }

  async list(params, page, limit) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsBannerType.findAll({
        where: {
          ...this.condition(params),
        },
        limit,
        offset: (page - 1) * limit,
      });
      return result;
    });
  }

  async count(params, page, limit) {
    const { ctx } = this;
    const result = await ctx.model.CmsBannerType.count({
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
      const result = await ctx.model.CmsBannerType.findByPk(id);
      return result;
    });
  }

  async add(params) {
    console.log(params);
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsBannerType.create(params);
      return result;
    });
  }

  async del(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsBannerType.destroy({
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
      const result = await ctx.model.CmsBannerType.update(params, {
        where: {
          id: params.id,
        },
      });
      return result;
    });
  }

  async all() {
    const { ctx } = this;
    const result = await ctx.model.CmsBannerType.findAll();
    return result;
  }
}

module.exports = BannerService;
