/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cms_banner', {
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    typeId: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    imgUrl: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    adUrl: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    sortId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '99'
    }
  }, {
    tableName: 'cms_banner'
  });

  Model.associate = function() {

  }

  return Model;
};
