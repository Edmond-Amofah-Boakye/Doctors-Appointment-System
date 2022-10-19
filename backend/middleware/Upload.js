const multer = require('multer')

const fileStorageEng = multer.diskStorage({
  destination: (req, file, cb)=>{
      cb(null, 'images');
  },
  filename: (req, file, cb)=>{
    cb(null, Date.now() + "--" + file.originalname);
  },
});



const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    }


const upload = multer({storage: fileStorageEng, fileFilter: fileFilter});

module.exports = upload;