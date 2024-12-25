import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./connect";

import postRoutes from "./routes/postRoutes";
import dalleRoutes from "./routes/dalleRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Visio");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL as string);
    app.listen(8080, () =>
      console.log("Server is running on http://localhost:8080")
    );
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};

startServer();
