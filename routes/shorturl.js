const router = require("express").Router();
const ShortUrl = require("../models/shorturlmap");

router.post("/save", async (req, res) => {
  const { original, shortUrl } = req.body;
  console.log(original,shortUrl);
  

  if (!original || !shortUrl)
    return res.status(400).json({ error: "field can't be Empty!" });

    const url = original;
    const parts = url.split("/files/");
     const desired = parts[1];
     console.log(desired);
  

  try {
    const existingUrl = await ShortUrl.findOne({ shortUrl: shortUrl });

    if (!existingUrl) {
      //   res.json({ result: `String '${shortUrl}' is present in the database` });
      console.log(req.body.original, req.body.shortUrl);
      const urlshort = await ShortUrl.create({
        fullurl: desired,
        shorturl: req.body.shortUrl,
      });
      console.log(urlshort);

      res.on({ message: "success", short: `${shortUrl}`, urlshort });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while checking the string" });
  }

  res.json({ message: "url is taken" });
});

module.exports = router;
