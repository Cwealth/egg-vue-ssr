'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cms_service', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gameId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
  }, {
    tableName: 'cms_service',
  });

  Model.associate = function() {
    app.model.CmsService.belongsTo(app.model.CmsGames, { foreignKey: 'gameId' });
  };

  return Model;
};
