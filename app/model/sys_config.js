'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sys_config', {
    configId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    webCode: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    copyright: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    serviceEmail: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    logoUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    androidLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    iosLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ico: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'sys_config',
  });

  Model.associate = function() {

  };

  return Model;
};
