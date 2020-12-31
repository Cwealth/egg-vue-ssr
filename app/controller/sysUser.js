'use strict';

const md5 = require('md5');
const BaseControll = require('./base');

class SysUserControll extends BaseControll {
  async list() {
    const { ctx } = this;
    const params = ctx.params();
    const page = params.page || 1;
    const limit = params.limit || 10;
    const count = await ctx.service.sysUser.count(params, page, limit);
    let data = await ctx.service.sysUser.list(params, page, limit);
    data = data.map(item => {
      const obj = item.dataValues;
      return {
        ...ctx.helper.unPick(obj, [ 'password' ]),
        createTime: ctx.helper.timestamp(obj.createTime),
        updateTime: ctx.helper.timestamp(obj.updateTime),
      };
    });
    this.pageSuccess(data, count);
  }

  async getItem() {
    const { ctx } = this;
    const result = await ctx.service.sysUser.getItem(ctx.params('id'));
    this.success(result);
  }

  async add() {
    const { ctx, app } = this;
    const rule = {
      username: { type: 'string', require: true },
    };
    ctx.validate(rule);
    let params = ctx.params();
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      this.error('用户已存在');
      return;
    }
    params = {
      ...ctx.helper.unPick(params, [ 'createTime', 'updateTime' ]),
      password: md5(params.password + app.config.salt),
    };
    console.log(params);
    const result = await ctx.service.sysUser.add(params);
    this.success(result);
  }

  async del() {
    const { ctx } = this;
    const user = await ctx.service.sysUser.getItem(ctx.params('id'));
    if (user.username === 'admin') {
      this.error('管理员账户不允许删除');
      return;
    }
    const result = await ctx.service.sysUser.del(ctx.params('id'));
    this.success(result);
  }

  async edit() {
    const { ctx, app } = this;
    let params = ctx.params();
    if (params.password) {
      params = {
        ...ctx.helper.unPick(params, [ 'createTime', 'updateTime', 'username' ]),
        password: md5(params.password + app.config.salt),
      };
    } else {
      params = {
        ...ctx.helper.unPick(params, [ 'createTime', 'updateTime', 'password', 'username' ]),
      };
    }
    await ctx.service.sysUser.edit(params);
    this.success('ok');
  }
}

module.exports = SysUserControll;
