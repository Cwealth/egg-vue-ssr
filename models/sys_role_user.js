/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sys_role_user', {
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'sys_role_user'
  });

  Model.associate = function() {

  }

  return Model;
};
