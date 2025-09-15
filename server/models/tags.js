const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Tag extends Model {}

Tag.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Tag",
    tableName: "tags",
    timestamps: false,
  }
);

module.exports = Tag;
