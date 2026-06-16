const path = require("path");

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "database.db");
const db = new sqlite3.Database(dbPath);

db.run("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, message TEXT)");


app.post("/messages", (req,res) => {
    const email = req.body.email;
    const message = req.body.message;

    db.run("INSERT INTO messages (email,message) values (?, ?)", [email,message]);

    res.send("Message Saved")
});

app.get("/messages", (req, res) => {
  db.all("SELECT * FROM messages", (error, rows) => {
    res.json(rows);
  });
});

app.delete("/messages/:id", (req, res) => {
  const id = req.params.id;

  db.run("DELETE FROM messages WHERE id = ?", [id]);

  res.send("Message deleted");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
