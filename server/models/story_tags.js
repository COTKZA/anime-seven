const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class StoryTag extends Model {}

StoryTag.init(
  {
    story_id: { type: DataTypes.INTEGER, allowNull: false },
    tag_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "StoryTag",
    tableName: "story_tags",
    timestamps: false,
  }
);

module.exports = StoryTag;
