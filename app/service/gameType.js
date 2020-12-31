'use strict';

const BaseService = require('./base');

class GameTypeService extends BaseService {

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
      console.log({
        ...this.condition(params),
      });
      const result = await ctx.model.CmsGameType.findAll({
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
    const result = await ctx.model.CmsGameType.count({
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
      const result = await ctx.model.CmsGameType.findByPk(id);
      return result;
    });
  }

  async add(params) {
    console.log(params);
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsGameType.create(params);
      return result;
    });
  }

  async del(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsGameType.destroy({
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
      const result = await ctx.model.CmsGameType.update(params, {
        where: {
          id: params.id,
        },
      });
      return result;
    });
  }

  async all() {
    const { ctx } = this;
    const result = await ctx.model.CmsGameType.findAll();
    return result;
  }
}

module.exports = GameTypeService;

