
const multer  = require('multer');

const diskStorage = multer.diskStorage({
    destination: function(req, file, cb){
            cb(null, './uploads');
    },
    filename: function(req, file, cb){
            const ext = file.mimetype.split('/')[1];
            const fileName = `user-${Date.now()}.${ext}`;
            cb(null, fileName);
    }
});
const fileFilter = (req, file, cb) => {
    const imageType = file.mimetype.split('/')[0];
    if(imageType === 'image'){
            return cb(null, true);
    }else{
            return cb('this must be an image', false);
    }
}
const upload = multer({ storage: diskStorage, fileFilter: fileFilter});

module.exports = upload;
