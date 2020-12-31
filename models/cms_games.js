/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cms_games', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    iconUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bannerUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iosLink: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    androidLink: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    clickNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    typeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    operateId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sortId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '99'
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
    },
    webUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'cms_games'
  });

  Model.associate = function() {

  }

  return Model;
};
