'use strict';
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cms_games', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    bannerUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    iconUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    webUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    clickNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    typeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    iosLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    androidLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    operateId: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    sortId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '99',
    },
    createTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
    },
    updateTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    tableName: 'cms_games',
  });

  Model.associate = function() {
    app.model.CmsGames.belongsTo(app.model.CmsGameType, { foreignKey: 'typeId' });
    app.model.CmsGames.belongsTo(app.model.CmsGameOperate, { foreignKey: 'operateId' });
  };

  return Model;
};
