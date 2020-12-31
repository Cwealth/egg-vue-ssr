'use strict';

const BaseService = require('./base');

class ServiceService extends BaseService {

  // 查询条件
  condition(data) {
    const { app } = this;
    const { like, gt, lt } = app.Sequelize.Op;
    const serviceType = data.serviceType;
    const option = {};
    console.log(data.name);
    if (data.name) option.name = { [like]: '%' + data.name + '%' };
    const tday = new Date(new Date().toLocaleDateString()).getTime();
    const nday = tday + (1000 * 60 * 60 * 24);
    if (serviceType === 0) {
      option.time = { [gt]: tday, [lt]: nday };
    } else if (serviceType === 1) {
      option.time = { [gt]: nday };
    } else if (serviceType === 2) {
      option.time = { [lt]: tday };
    }
    return option;
  }

  async list(params, page, limit) {
    return this.run(async () => {
      const { ctx, app } = this;
      const mode = Object.keys(ctx.model.CmsService.rawAttributes);
      const result = await ctx.model.CmsService.findAll({
        attributes: [
          ...mode,
          [ app.Sequelize.col('cms_game.name'), 'gameName' ],
          [ app.Sequelize.col('cms_game.typeId'), 'gameTypeId' ],
          [ app.Sequelize.col('cms_game.iconUrl'), 'iconUrl' ],
        ],
        where: {
          ...this.condition(params),
        },
        include: [
          {
            model: ctx.model.CmsGames,
            attributes: [],
          },
        ],
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
    const result = await ctx.model.CmsService.count({
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
      const result = await ctx.model.CmsService.findByPk(id);
      return result;
    });
  }

  async add(params) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsService.create(params);
      return result;
    });
  }

  async del(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsService.destroy({
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
      console.log(params);
      const result = await ctx.model.CmsService.update(params, {
        where: {
          id: params.id,
        },
      });
      return result;
    });
  }
}

module.exports = ServiceService;

