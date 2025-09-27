const Story = require("../../models/stories");
const Episodes = require("../../models/episodes");

exports.index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { count, rows } = await Story.findAndCountAll({
      offset: (page - 1) * limit,
      limit: limit,
      attributes: {
        exclude: ["user_id", "category_id", "description", "language", "created_at"],
      },
      include: [
        {
          model: Episodes,
          as: "episodes",
          attributes: ["id"], 
        },
      ],
      order: [["updated_at", "DESC"]],
    });

    const host = req.protocol + "://" + req.get("host");

    const data = rows.map((story) => ({
      ...story.toJSON(),
      cover_image: story.cover_image
        ? `${host}/storys/${story.cover_image}`
        : null,
      episodes_count:
        story.episodes.length > 0
          ? `1-${story.episodes.length}`
          : "ยังไม่มีตอน",
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
