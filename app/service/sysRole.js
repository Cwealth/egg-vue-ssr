'use strict';

const BaseService = require('./base');

class BaseSysRole extends BaseService {
  async sysRoles(userIds) {
    const { app } = this;
    const strUserIds = userIds.join(',');
    const sql = `select r.*,ru.userId from sys_role_user ru inner join sys_role r on r.id = ru.roleId  where ru.userId IN (${strUserIds})`;
    const [ result ] = await app.model.query(sql);
    return result;
  }
}

module.exports = BaseSysRole;
