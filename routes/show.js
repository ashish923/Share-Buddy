const router = require("express").Router();
const File = require("../models/file");
const ShortUrl = require("../models/shorturlmap");
router.get("/:uuid", async (req, res) => {
  // find uuid in database
    try {

        let uid = req.params.uuid;
        let file1 = await ShortUrl.findOne({ shorturl: req.params.uuid });
        // console.log(file1);
        if(file1)
            uid =file1.fullurl; 
        // console.log(uid);
        let file = await File.findOne({ uuid: uid });
        if (!file) {
            // const file1 = await ShortUrl.findOne({shorturl:req.params.uuid})
            //  if(!file1)   
             return res.render("download", { error: "Link Expire or File is not Present in Database" });
            // file = await File.findOne({ uuid: req.params.file });
            // console.log(file1);
            // return res.render("download", { error: "Link Expire or File is not Present in Database" });

        }
        return res.render("download", {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink : `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })
    } catch (err) {
        return res.render('download', {error:'Something went Wrong'});
    }
});

module.exports = router;
