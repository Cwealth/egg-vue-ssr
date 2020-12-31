'use strict';

const BaseService = require('./base');

class RealmService extends BaseService {

  // 查询条件
  condition(data) {
    const { app } = this;
    const { like } = app.Sequelize.Op;
    const option = {};
    if (data.name) option.name = { [like]: '%' + data.name + '%' };
    return option;
  }

  async getOne(params) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.CmsRealm.findOne({
        where: {
          ...this.condition(params),
        },
      });
      return result;
    });
  }
}

module.exports = RealmService;

