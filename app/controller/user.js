'use strict';

const md5 = require('md5');
const BaseControll = require('./base');

class UserControll extends BaseControll {

  async jwtSign({ id, username }) { // 生成并保存token到redis
    const { app } = this;
    const token = app.jwt.sign({
      id,
      username,
    }, app.config.jwt.secret);
    await app.redis.set(username, token, 'EX', app.config.redisExpire);
    return token;
  }

  parseResult(result) {
    const { ctx } = this;
    return {
      ...ctx.helper.unPick(result.dataValues, [ 'password' ]),
      createTime: ctx.helper.timestamp(result.createTime),
    };
  }

  async register() { // 注册
    const { ctx, app } = this;
    const params = ctx.params();
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      this.error('用户已存在');
      return;
    }

    const result = await ctx.service.user.add({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });

    if (result) {
      const token = await this.jwtSign({
        id: result.id,
        username: result.username,
      });
      this.success({
        ...this.parseResult(result),
        token,
      });
    } else {
      this.error('注册失败');
    }
  }

  async login() { // 登录
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);
    if (user) {
      const token = await this.jwtSign({
        id: user.id,
        username: user.username,
      });
      this.success({
        ...this.parseResult(user),
        token,
      });
    } else {
      this.error('用户不存在');
    }
  }

  async detail() { // 用户详情
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    if (user) {
      const roles = await ctx.service.sysRole.sysRoles([ user.id ]); // 根据用户id获取权限信息
      user.dataValues.roles = roles.map(r => r.code); // 合并
      this.success({
        ...this.parseResult(user),
      });
    } else {
      this.error('用户不存在');
    }
  }

  async logout() { // 退出登录
    try {
      const { ctx, app } = this;
      await app.redis.del(ctx.username);
      this.success('ok');
    } catch (error) {
      console.log(error);
      this.error('退出登录失败');
    }
  }

  async edit() { // 修改用户信息
    const { ctx } = this;
    const result = ctx.service.user.edit({ ...ctx.params() });
    this.success(result);
  }
}

module.exports = UserControll;

