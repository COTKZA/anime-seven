const User = require("../../models/users");
const Category = require("../../models/categories");
const Tag = require("../../models/tags");
const Story = require("../../models/stories");
const Episodes = require("../../models/episodes");

// Dashboard statistics
exports.index = async (req, res) => {
  try {
    const users = await User.count();
    const category = await Category.count();
    const tags = await Tag.count();
    const story = await Story.count();
    const episodes = await Episodes.count();

    res.status(200).json({
      message: "Data fetch Successfully",
      user: users,
      category: category,
      tags: tags,
      story: story,
      episodes: episodes,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
