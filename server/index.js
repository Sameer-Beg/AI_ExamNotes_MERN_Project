// -------------------- IMPORTS --------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./utils/connectDB.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/genrate.route.js";
import pdfRouter from "./routes/pdf.route.js";
import creditRouter from "./routes/credits.route.js";
import { stripeWebhook } from "./controllers/credits.controller.js";

// -------------------- CONFIG --------------------
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- DATABASE CONNECTION --------------------
connectDb();

// webhook route 
app.post(
  "/api/credits/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);
// -------------------- MIDDLEWARES --------------------
app.use(
  cors({
    origin: "https://ai-examnotes-mern-projectclient.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());
app.use(cookieParser());

// -------------------- ROUTES --------------------
app.get("/", (req, res) => {
  res.send("Sameer is a developer in Dubai 🚀");
});

app.use("/api/auth", authRouter);
app.use("/api/user" , userRouter)
app.use("/api/notes" , notesRouter)
app.use("/api/pdf" , pdfRouter)
app.use("/api/credit",creditRouter)
// -------------------- SERVER LISTEN --------------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
