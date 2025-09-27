const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./categories");
const Episodes = require("./episodes");
const StoryTag = require("./story_tags");
const Tag = require("./tags");

class Story extends Model {}

Story.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    cover_image: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    category_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    status: {
      type: DataTypes.ENUM("ongoing", "completed"),
      defaultValue: "ongoing",
      allowNull: false,
    },
    language: {
      type: DataTypes.ENUM("thai_sub", "thai_dub"),
      defaultValue: "thai_dub",
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

Story.belongsTo(Category, { foreignKey: "category_id", as: "category" });
Story.hasMany(Episodes, { foreignKey: "story_id", as: "episodes" });
Episodes.belongsTo(Story, { foreignKey: "story_id", as: "story" });

Story.belongsToMany(Tag, {
  through: StoryTag,
  foreignKey: "story_id",
  otherKey: "tag_id",
  as: "tags",
});

Tag.belongsToMany(Story, {
  through: StoryTag,
  foreignKey: "tag_id",
  otherKey: "story_id",
  as: "stories",
});

module.exports = Story;
