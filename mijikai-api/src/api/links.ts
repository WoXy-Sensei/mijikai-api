import express from "express";
import ShortUrlModel from "../models/ShortUrlModel";
import generateShortId from "../utils/GenerateShortId";
import isValidUrl from "../utils/IsValidUrl";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;

  if (!body.url) {
    res.json({
      message: "URL is required",
    });
    return;
  }

  if (!isValidUrl(body.url)) {
    res.json({
      message: "URL is invalid",
    });
    return;
  }

  const shortId = generateShortId(6);
  await ShortUrlModel.create({ url: body.url, shortId: shortId });

  res.json({
    shortUrl: `${process.env.BASE_URL}/${shortId}`,
  });
  return;
});

export default router;
