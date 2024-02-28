import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    const filename = file.fieldname + '-' + Date.now() + extension;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage }).any();

export default upload;
