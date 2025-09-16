const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Story extends Model {}

Story.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    cover_image: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    category_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    status: {
      type: DataTypes.ENUM("ongoing", "completed", "hiatus"),
      defaultValue: "ongoing",
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Story",
    tableName: "stories",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Story;
