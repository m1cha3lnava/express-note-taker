const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  
/* app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
 */
/*   app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCharacter);
  
    characters.push(newCharacter);
  
    res.json(newCharacter);
  }); */

app.listen(PORT, (req, res) => {
  console.log(`Currently running on http://localhost:${PORT}`);
});
