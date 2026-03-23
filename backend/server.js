import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/message", async (req, res) => {
  const { name, message } = req.body;

  const { data, error } = await supabase
    .from("messages")
    .insert([{ name, message }]);

  if (error) {
    console.error("Supabase Error:", error);
    return res.status(500).json({ error });
  }

  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});