const User = require("../../models/users");
const Category = require("../../models/categories");
const Tag = require("../../models/tags");

exports.index = async (req, res) => {
  try {
    const users = await User.count();
    const category = await Category.count();
    const tags = await Tag.count();

    res.status(200).json({
      message: "Data fetch Successfully",
      user: users,
      category: category,
      tags: tags,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
