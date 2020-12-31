'use strict';

const BaseService = require('./base');

class GamesService extends BaseService {

  // 查询条件
  condition(data) {
    const { app } = this;
    const { like } = app.Sequelize.Op;
    const option = {};
    if (data.name) option.name = { [like]: '%' + data.name + '%' };
    if (data.typeId) option.typeId = data.typeId;
    if (data.operateId) option.operateId = { [like]: '%' + data.operateId + '%' };
    return option;
  }

  async list(params, page, limit, order) {
    return this.run(async () => {
      const { ctx, app } = this;
      const mode = Object.keys(ctx.model.CmsGames.rawAttributes);
      const result = await ctx.model.CmsGames.findAll({
        attributes: [
          ...mode,
          [ app.Sequelize.col('cms_game_operate.name'), 'operateName' ],
          [ app.Sequelize.col('cms_game_type.name'), 'typeName' ],
        ],
        where: {
          ...this.condition(params),
        },
        include: [
          {
            model: ctx.model.CmsGameOperate,
            attributes: [],
          },
          {
            model: ctx.model.CmsGameType,
            attributes: [],
          },
        ],
        limit,
        offset: (page - 1) * limit,
        order: [
          order,
        ],
      });
      return result;
    });
  }

  async count(params) {
    const { ctx } = this;
    const result = await ctx.model.CmsGames.count({
      where: {
        ...this.condition(params),
      },
    });
    return result;
  }

  async getItem(id) {
    return this.run(async () => {
      const { ctx, app } = this;
      const mode = Object.keys(ctx.model.CmsGames.rawAttributes);
      const result = await ctx.model.CmsGames.findOne({
        attributes: [
          ...mode,
          [ app.Sequelize.col('cms_game_type.name'), 'typeName' ],
        ],
        where: {
          id,
        },
        include: [
          {
            model: ctx.model.CmsGameType,
            attributes: [],
          },
        ],
      });
      return result;
    });
  }
}

module.exports = GamesService;

