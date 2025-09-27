const Category = require("../../models/categories");
const { Op } = require("sequelize");

// List all categories with pagination and search
exports.index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const inputsearch = req.query.search || "";

    const search = inputsearch
      ? { name: { [Op.like]: `%${inputsearch}%` } }
      : {};

    const { count, rows } = await Category.findAndCountAll({
      where: search,
      offset: (page - 1) * limit,
      limit: limit,
      order: [["id", "ASC"]],
    });

    res.status(200).json({
      message: "Catefory fetched successfully",
      data: rows,
      total: count,
      page: page,
      total_page: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new category
exports.create_category = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "required" });
    }

    await Category.create({
      name: name,
    });

    res.status(201).json({ message: "Category create successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get category by ID
exports.categoryId = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res
      .status(200)
      .json({ message: "Category find Successfully", data: category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update category by ID
exports.update_category = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "required" });
    }

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.update({
      name: name,
    });

    res.status(200).json({ message: "Category updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete category by ID
exports.delete_category = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Category.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json({ message: "Category Delete Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
