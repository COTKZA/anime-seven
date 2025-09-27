const Story = require("../../models/stories");
const Tag = require("../../models/tags")
const { Op } = require("sequelize");

exports.index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const inputsearch = req.query.search || "";

    const search = inputsearch
      ? { title: { [Op.like]: `%${inputsearch}%` } }
      : {};

    const { count, rows } = await Story.findAndCountAll({
      where: search,
      offset: (page - 1) * limit,
      limit: limit,
      attributes: ["title"],
      include: [
        {
          model: Tag,
          as: "tags",
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
      order: [["id", "ASC"]],
    });

    res.status(200).json({
      message: "StoryTag fetch Successfully",
      data: rows,
      total: count,
      page: page,
      total_page: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
