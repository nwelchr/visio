import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.send("Hello from Visio");
});

router.route("/").post(async (req, res) => {
  console.log("hellooooo", req.body);
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: 1,
      size: "256x256",
    });

    const imageUrl = response.data[0].url;

    res.status(200).json({ photo: imageUrl });
  } catch (e) {
    console.log(e);
    res.status(500).json(e || "An error occurred");
  }
});

export default router;
