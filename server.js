const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.listen(PORT, (req, res) => {
  console.log(`Currently running on http://localhost:${PORT}`);
});

