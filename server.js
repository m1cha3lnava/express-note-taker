const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const db = require("./db/db");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view requests
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
  return res.json(db);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//api requests
app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json(req.body)
})

app.listen(PORT, (req, res) => {
  console.log(`Currently running on http://localhost:${PORT}`);
});
