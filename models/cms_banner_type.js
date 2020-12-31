/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cms_banner_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'cms_banner_type'
  });

  Model.associate = function() {

  }

  return Model;
};
