
'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cms_news', {
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    imgUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    typeId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sortId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '99',
    },
    gameId: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
    },
    realmId: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
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
    tableName: 'cms_news',
  });

  Model.associate = function() {
    app.model.CmsNews.belongsTo(app.model.CmsNewsType, { foreignKey: 'typeId' });
    app.model.CmsNews.belongsTo(app.model.CmsRealm, { foreignKey: 'realmId' });
    app.model.CmsNews.belongsTo(app.model.CmsGames, { foreignKey: 'gameId' });
  };

  return Model;
};
