'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngredientYule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      IngredientYule.belongsTo(models.Ingredient)
      IngredientYule.belongsTo(models.Yule)
    }
  };
  IngredientYule.init({
  }, {
    sequelize,
    modelName: 'IngredientYule',
  });
  return IngredientYule;
};