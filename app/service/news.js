'use strict';

const BaseService = require('./base');

class NewsService extends BaseService {

  // 查询条件
  condition(data) {
    const { app } = this;
    const { like } = app.Sequelize.Op;
    const option = {};
    if (data.id) option.id = data.id;
    if (data.title) option.title = { [like]: '%' + data.title + '%' };
    if (data.typeId || data.typeId === 0) option.typeId = data.typeId;
    if (data.realmId || data.realmId === 0) option.realmId = data.realmId;
    return option;
  }

  async list(params, page, limit, order) {
    return this.run(async () => {
      const { ctx, app } = this;
      const mode = Object.keys(ctx.model.CmsNews.rawAttributes);
      const result = await ctx.model.CmsNews.findAll({
        attributes: [
          ...mode,
          [ app.Sequelize.col('cms_news_type.name'), 'typeName' ],
        ],
        where: {
          ...this.condition(params),
        },
        include: [
          {
            model: ctx.model.CmsNewsType,
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

  async count(params, page, limit) {
    const { ctx } = this;
    const result = await ctx.model.CmsNews.count({
      where: {
        ...this.condition(params),
      },
      limit,
      offset: (page - 1) * limit,
    });
    return result;
  }

  async getItem(params) {
    return this.run(async () => {
      const { ctx, app } = this;
      const mode = Object.keys(ctx.model.CmsNews.rawAttributes);
      const result = await ctx.model.CmsNews.findOne({
        attributes: [
          ...mode,
          [ app.Sequelize.col('cms_news_type.name'), 'typeName' ],
          [ app.Sequelize.col('cms_game.id'), 'gameId' ],
          [ app.Sequelize.col('cms_game.cms_game_type.name'), 'gameTypeName' ],
          [ app.Sequelize.col('cms_game.iconUrl'), 'gameIconUrl' ],
          [ app.Sequelize.col('cms_game.clickNum'), 'gameClickNum' ],
          [ app.Sequelize.col('cms_game.iosLink'), 'gameIosLink' ],
          [ app.Sequelize.col('cms_game.androidLink'), 'gameAndroidLink' ],
          [ app.Sequelize.col('cms_game.operateId'), 'gameOperateId' ],
          [ app.Sequelize.col('cms_game.name'), 'gameName' ],
          [ app.Sequelize.col('cms_game.webUrl'), 'gameWebUrl' ],
        ],
        where: {
          ...this.condition(params),
        },
        include: [
          {
            model: ctx.model.CmsNewsType,
            attributes: [],
          },
          {
            model: ctx.model.CmsGames,
            attributes: [],
            include: [
              {
                model: ctx.model.CmsGameType,
                attributes: [],
              },
            ],
          },
        ],
      });
      return result;
    });
  }

  async add(params) {
    console.log(params);
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsNews.create(params);
      return result;
    });
  }

  async del(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsNews.destroy({
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
      const result = await ctx.model.CmsNews.update(params, {
        where: {
          id: params.id,
        },
      });
      return result;
    });
  }
}

module.exports = NewsService;

