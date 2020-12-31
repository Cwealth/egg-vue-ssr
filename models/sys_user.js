/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sys_user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    headImgUrl: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    sex: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    createTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updateTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'sys_user'
  });

  Model.associate = function() {

  }

  return Model;
};
