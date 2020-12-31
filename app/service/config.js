'use strict';

const BaseService = require('./base');

class ConfigService extends BaseService {

  async getItem(configId) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.SysConfig.findOne({
        where: {
          configId,
        },
      });
      return result;
    });
  }

  async edit(params) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.SysConfig.update(params, {
        where: {
          configId: params.configId,
        },
      });
      return result;
    });
  }
}

module.exports = ConfigService;

