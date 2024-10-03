// import multer from 'multer';
// import multerS3 from 'multer-s3';
// import { S3Client } from '@aws-sdk/client-s3';
const multer = require('multer');
const path = require('path');

// const s3 = new S3Client({
//     region: process.env.AWS_BUCKET_REGION,
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
//     }
// });
// const getMulterStorage = (storagePath) => {
//     const s3Storage = multerS3({
//         s3: s3,
//         bucket: "ramabetsfile",
//         acl: "public-read",
//         metadata: (req, file, cb) => {
//             cb(null, { fieldname: file.fieldname });
//         },
//         key: (req, file, cb) => {
//             const fileName = `${storagePath}/${file.fieldname}_${Date.now()}_${file.originalname}`;
//             cb(null, fileName);
//         },
//     });

//     const multerInstanceForUpload = multer({
//         storage: s3Storage,
//     });
//     return multerInstanceForUpload;
// };
const getMulterStorage = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/'); // Set upload directory
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    });
    const upload = multer({ storage: storage });
    return upload;
}
export default getMulterStorage;