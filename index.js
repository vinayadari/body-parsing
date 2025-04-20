import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Initialize express app
const app = express();
const port = 3000;

// Middleware to parse form data from POST requests
app.use(express.urlencoded({ extended: true }));

// Serve static files (index.html)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the index.html when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle POST request to /submit
app.post("/submit", (req, res) => {
  const { name, id } = req.body;
  res.send(`<h1>Name: ${name}</h1> <h1>ID: ${id}</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
