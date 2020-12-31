'use strict';

const md5 = require('md5');

const BaseService = require('./base');

class userService extends BaseService {
  async getUser(username, password) {
    return this.run(async () => {
      const { ctx, app } = this;
      const _where = password ? { username, password: md5(password + app.config.salt) } : { username };
      const result = await ctx.model.SysUser.findOne({
        where: _where,
      });
      return result;
    });
  }

  async add(params) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.SysUser.create(params);
      return result;
    });
  }

  async edit(params) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.SysUser.update(params, {
        where: {
          username: ctx.username,
        },
      });
      return result;
    });
  }
}

module.exports = userService;
