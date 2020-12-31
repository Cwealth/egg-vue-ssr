'use strict';

const BaseService = require('./base');

class SysUserService extends BaseService {

  // 查询条件
  condition(data) {
    // const { app } = this;
    // const { like } = app.Sequelize.Op;
    const option = {};
    // if (data.name) option.name = { [like]: '%' + data.name + '%' };
    if (data.id) option.id = data.id;
    return option;
  }

  async list(params, page, limit) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.SysUser.findAll({
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
    const result = await ctx.model.SysUser.count({
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
      const result = await ctx.model.SysUser.findByPk(id);
      return result;
    });
  }

  // async getUser(username, password) {
  //   return this.run(async () => {
  //     const { ctx, app } = this;
  //     const _where = password ? { username, password: md5(password + app.config.salt) } : { username };
  //     const result = await ctx.model.SysUser.findOne({
  //       where: _where,
  //     });
  //     return result;
  //   });
  // }

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
          id: params.id,
        },
      });
      return result;
    });
  }

  async del(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.SysUser.destroy({
        where: {
          id,
        },
      });
      return result;
    });
  }
}

module.exports = SysUserService;
