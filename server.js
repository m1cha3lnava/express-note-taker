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

//api requests
app.post("/api/notes", function (req, res) {
  console.log(req.body);

  db.push({
    title: req.body.title,
    text: req.body.text,
    id: newID,
  });
  //looked up npm package to assign random ids
  //   res.json(req.body);
  //   db.push(req.body);
  //   title: 'as,djfh', text: 'adlkfjalsd'
});

app.delete("/api/notes/:id", function (req, res) {
  res.send("Got a DELETE request at /user");
});

/* app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  }) */

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`Currently running on http://localhost:${PORT}`);
});
