const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
let db = require("./db/db");
const { notStrictEqual } = require("assert");
const { parse } = require("path");

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
let noteIncrement = 0;
app.post("/api/notes", (req, res) => {
  // console.log("req.body");
  // console.log(req.body);
  // res.json(req.body);
  noteIncrement++;
  req.body.id = noteIncrement;
  db.push(req.body);
  return res.json(db);
  /* fs.writeFile("./db/db.json", JSON.stringify(db), (err, data) => {
    if (err) throw err;
    res.json(req.body);
  }); */
});

app.delete("/api/notes/:id", (req, res) => {
  // console.log("db: " + db)
  let noteToDelete = +(req.params.id)
  // console.log("noteDelete: " + noteToDelete);
  // console.log("id: " + db[req.params.id].id);
  // console.log("title: " + db[req.params.id].title);
  // console.log("text: " + db[req.params.id].text);
  
 let filteredNotes = db.filter(notes => !(notes.id == noteToDelete)
  )
  console.log({filteredNotes,noteToDelete});
  // console.log(filteredNotes);
  db = filteredNotes;
  res.json(db);
  // console.log(typeof req.params.id)
  // console.log(db[0].id)
  /* function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
 databaseL = ages.filter(checkAdult);
}   */
  /* pass a function to map
const map1 = array1.map(x => x * 2); */
  // console.log(db);
  

  // console.log("id: " + req.params.id);
  // let noteId = req.params.id;
  // console.log("noteID: " + noteId);
  // console.log(db);
  // res.json(db);
  //  console.log("delete");
  /* fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    const arrayOfNotes = JSON.parse(data);
    let newNoteArray = arrayOfNotes.filter(function (paramNotes) {
      return paramNotes.id !== buttonID;
    });
    fs.writeFile("./db/db.json", JSON.stringify(newNoteArray), (err) => {
      if (err) throw err;
      res.json(newNoteArray);
    });
  }); */
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`Currently running on http://localhost:${PORT}`);
});
