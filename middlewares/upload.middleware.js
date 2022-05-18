const uuid = require('uuid');
const path = require('path');
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: process.env.MONGODB_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        let uniqueFilename = uuid.v4();
        const filename = `${uniqueFilename}${path.extname(file.originalname)}`;

        if (match.indexOf(file.mimetype) === -1) {
            return filename;
        }

        return {
            bucketName: "photos",
            filename: filename,
        };
    },
});

module.exports = multer({ storage });