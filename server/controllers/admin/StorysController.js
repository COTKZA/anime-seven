const Story = require("../../models/stories");
const Category = require("../../models/categories");
const Episodes = require("../../models/episodes");
const Tag = require("../../models/tags");
const StoryTag = require("../../models/story_tags");
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
      order: [["id", "ASC"]],
      attributes: { exclude: ["user_id", "description", "category_id"] },
    });

    const host = req.protocol + "://" + req.get("host");

    const data = rows.map((story) => ({
      ...story.toJSON(),
      cover_image: story.cover_image
        ? ` ${host}/storys/${story.cover_image}`
        : null,
    }));

    res.status(200).json({
      message: "Story fetch Successfully",
      data: data,
      total: count,
      page: page,
      total_page: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.selectCategory = async (req, res) => {
  try {
    const category = await Category.findAll();

    if (!category || category.length === 0) {
      return res.status(404).json({ error: "Not Found Category" });
    }

    res.status(200).json({
      message: "fetch Category successfully",
      category: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create_story = async (req, res) => {
  try {
    const { title, description, categoryid, userId, status, language } =
      req.body;
    const file = req.file;

    if (
      !title ||
      !description ||
      !categoryid ||
      !userId ||
      !status ||
      !language
    ) {
      return res.status(400).json({ error: "required" });
    }

    if (!file) {
      return res.status(400).json({ error: "Cover image is required" });
    }

    await Story.create({
      title: title,
      cover_image: file.filename,
      description: description,
      category_id: Number(categoryid),
      user_id: Number(userId),
      status: status,
      language: language,
    });

    res.status(201).json({ message: "Create Story success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.storyId = async (req, res) => {
  try {
    const { id } = req.params;

    const story = await Story.findByPk(id, {
      attributes: { exclude: ["user_id", "category_id"] },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
        {
          model: Tag,
          as: "tags",
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Episodes,
          as: "episodes",
          attributes: ["id"],
        },
      ],
    });

    if (!story) {
      return res.status(404).json({ error: "Not Found" });
    }

    const host = req.protocol + "://" + req.get("host");

    const data = {
      ...story.toJSON(),
      cover_image: story.cover_image
        ? `${host}/storys/${story.cover_image}`
        : null,
      episodes_count:
        story.episodes.length > 0
          ? `1-${story.episodes.length}`
          : "ยังไม่มีตอน",
    };

    res.status(200).json({ message: "Story fetch Successfully", data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.storyTagId = async (req, res) => {
  try {
    const { id } = req.params;

    const story = await Story.findByPk(id, {
      attributes: [],
      include: [
        {
          model: Tag,
          as: "tags",
          attributes: ["name"],
          through: { attributes: ["id"] },
        },
      ],
    });

    res.status(200).json({ message: "StoryTags fetch Success", data: story });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.selectTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();

    if (!tags || tags.length === 0) {
      return res.status(404).json({ error: "Not Found Tags" });
    }

    res.status(200).json({
      message: "fetch Tags successfully",
      tags: tags,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStorytags = async (req, res) => {
  try {
    const { story_id, tag_id } = req.body;

    if (!story_id || !tag_id) {
      return res.status(400).json({ error: "required" });
    }

    const exist = await StoryTag.findOne({
      where: { story_id, tag_id },
    });

    if (exist) {
      return res.status(409).json({error: "This tag already exists in the story."})
    }

    await StoryTag.create({
      story_id: story_id,
      tag_id: tag_id,
    });

    res.status(201).json({ message: "create storytag sucessfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStoryTag = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await StoryTag.destroy({ where: { id } });

    if (!deleted) {
      return res.status(400).json({ error: "StoryTag not found" });
    }

    res.status(200).json({ message: "StoryTag Delete Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
