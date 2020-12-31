'use strict';
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cms_game_operate', {
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }, {
    tableName: 'cms_game_operate',
  });

  Model.associate = function() {

  };

  return Model;
};
