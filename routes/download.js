const router = require("express").Router();
const File = require("../models/file");
const path = require("path");
router.get("/:uuid", async (req, res) => {

  try {
    // Your Mongoose operation here
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) {
      return res.render("download", {
        error: "Link Expire or File is not Present in Database",
      });
    }
    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath);
  } catch (error) {
    // Handle the error appropriately
    console.error("Error:", error);
  }
  
});

module.exports = router;
