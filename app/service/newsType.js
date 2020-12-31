'use strict';

const BaseService = require('./base');

class NewsTypeService extends BaseService {

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
      const result = await ctx.model.CmsNewsType.findAll({
        where: {
          ...this.condition(params),
        },
        limit,
        offset: (page - 1) * limit,
        order: [
          [ 'id', 'DESC' ],
        ],
      });
      return result;
    });
  }

  async count(params, page, limit) {
    const { ctx } = this;
    const result = await ctx.model.CmsNewsType.count({
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
      const result = await ctx.model.CmsNewsType.findByPk(id);
      return result;
    });
  }

  async add(params) {
    console.log(params);
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsNewsType.create(params);
      return result;
    });
  }

  async del(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsNewsType.destroy({
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
      const result = await ctx.model.CmsNewsType.update(params, {
        where: {
          id: params.id,
        },
      });
      return result;
    });
  }

  async all() {
    const { ctx } = this;
    const result = await ctx.model.CmsNewsType.findAll();
    return result;
  }
}

module.exports = NewsTypeService;

