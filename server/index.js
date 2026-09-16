import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contentRoutes from "./routes/content.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    db: mongoose.connection.readyState === 1 ? "connected" : "offline",
  });
});

app.use("/api/content", contentRoutes);
app.use("/api/contact", contactRoutes);

async function start() {
  const uri = process.env.MONGO_URI;
  if (uri) {
    try {
      await mongoose.connect(uri);
      console.log("MongoDB connected");
    } catch (err) {
      console.warn("MongoDB not available — contact form will still accept requests:", err.message);
    }
  }

  app.listen(PORT, () => {
    console.log(`AVENORA API running on http://localhost:${PORT}`);
  });
}

start();
