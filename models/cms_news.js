/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cms_news', {
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imgUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    typeId: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    sortId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '99'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gameId: {
      type: DataTypes.INTEGER(8),
      allowNull: true
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
    realmId: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    }
  }, {
    tableName: 'cms_news'
  });

  Model.associate = function() {

  }

  return Model;
};
