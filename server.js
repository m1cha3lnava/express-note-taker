const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", )

app.listen(PORT, (req, res) => {
    console.log(`Currently running on http://localhost:${PORT}`)
})
