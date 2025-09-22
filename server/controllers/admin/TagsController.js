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

exports.tagId = async (req, res) => {
  try {
    const { id } = req.params;

    const tags = await Tag.findByPk(id);

    if (!tags) {
      return res.status(400).json({ error: "Not Found" });
    }

    res
      .status(200)
      .json({ messsage: "fetch tags id successfully", data: tags });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update_tags = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(404).json({ error: "required" });
    }

    const tags = await Tag.findByPk(id);

    if (!tags) {
      return res.status(404).json({ error: "Tags not Found" });
    }

    await tags.update({
      name: name,
    });

    res.status(200).json({ message: "Tags updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete_tags = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Tag.destroy({ where: { id } });

    if (!deleted) {
      return res.status(400).json({ error: "Category not found" });
    }

    res.status(200).json({ message: "Tags Delete Successfully" });
  } catch (error) {
    res.status(500).json({ error: message.error });
  }
};
