const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/storys/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const filename = Date.now() + ext;
    cb(null, filename);
  },
});

const uploadStory = multer({ storage });

module.exports = uploadStory;
