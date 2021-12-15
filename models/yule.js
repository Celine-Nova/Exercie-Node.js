'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Yule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Yule.belongsTo(models.Category)
      Yule.hasMany(models.IngredientYule)
      Yule.belongsToMany(models.Ingredient,{
        through: models.IngredientYule
      })
    }
  };
  Yule.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Yule',
  });
  return Yule;
};