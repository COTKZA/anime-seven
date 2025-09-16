const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Episodes extends Model {}

Episodes.init(
  {
    story_id: { type: DataTypes.INTEGER, allowNull: false },
    story_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "Episodes",
    tableName: "episodes",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Episodes;
