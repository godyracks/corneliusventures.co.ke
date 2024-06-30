const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Uploads folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // File naming strategy
  }
});

const fileFilter = (req, file, cb) => {
  // File filter logic if needed
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
}).single('image'); // Expect a single file with the field name 'image'

module.exports = upload;
