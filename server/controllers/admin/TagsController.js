const Tag = require("../../models/tags");
const { Op } = require("sequelize");

exports.index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const inputsearch = req.query.search || "";

    const search = inputsearch
      ? { name: { [Op.like]: `%${inputsearch}%` } }
      : {};

    const { count, rows } = await Tag.findAndCountAll({
      where: search,
      offset: (page - 1) * limit,
      limit: limit,
      order: [["id", "ASC"]],
    });

    res.status(200).json({
      message: "Tags fetch Successfully",
      data: rows,
      total: count,
      page: page,
      total_page: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create_tag = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(404).json({ error: "required" });
    }

    await Tag.create({
      name: name,
    });

    res.status(201).json({ message: "Tags Created Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
