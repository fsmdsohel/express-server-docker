import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

// Define routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Express Server 🚀",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
