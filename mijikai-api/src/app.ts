import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import ShortUrlModel from "./models/ShortUrlModel";
import * as middlewares from "./middlewares";
import api from "./api";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/:shortId", async (req, res) => {
  const shortUrl = await ShortUrlModel.findOne({ shortId: req.params.shortId });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks += 1;
  shortUrl.save();

  res.redirect(shortUrl.url);
});

app.use("/api/v1", api);

app.use(middlewares.notFound);

export default app;
