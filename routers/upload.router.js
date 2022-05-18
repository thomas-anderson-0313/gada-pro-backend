const upload = require("../middlewares/upload.middleware");
const express = require("express");
const router = express.Router();

const BASE_URL = process.env.BASE_URL || 'http://localhost:3100/';
router.post("/upload", upload.single("file"), async (req, res) => {
    console.log(req.file);
    if (req.file === undefined) return res.status(500).json({ status: 0, data: "You must select a file." });
    const imgUrl = `${BASE_URL}api/v1/file/${req.file.filename}`;
    return res.status(200).json({ status: 1, data: {
        imgUrl,
        filename: req.file.filename,
    }});
});

module.exports = router;