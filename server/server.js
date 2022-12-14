const express = require("express");
const bodyParser = require("body-Parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: "chriseldb.czxizwl3mtnt.us-west-1.rds.amazonaws.com",
  user: "chrisel",
  password: "chriselcoelho",
  port: 3306,
  database: "CHRISEL",
  multipleStatements: true,
});

db.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Connection Failed");
  }
});

app.post("/api/insert", (req, res) => {
  const rollno = req.body.rollno;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const department = req.body.department;
  const dob = req.body.dob;
  const email = req.body.email;
  const phoneno = req.body.phoneno;

  const sqlInsert =
    "INSERT INTO student (rollno, firstname, lastname, department, dob, email, phoneno) value (?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [rollno, firstname, lastname, department, dob, email, phoneno],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM student;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.delete("/api/delete/:rollno", (req, res) => {
  const rollno = req.params.rollno;
  const sqlDelete = "DELETE FROM student WHERE rollno = ?";
  db.query(sqlDelete, rollno, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.put("/api/update", (req, res) => {
  const rollno = req.body.rollno;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const department = req.body.department;
  const academicyear = req.body.academicyear;
  const dob = req.body.dob;
  const email = req.body.email;
  const phoneno = req.body.phoneno;

  const sqlUpdate =
    "UPDATE student SET firstname=?, lastname=?, department=?, dob=?, email=?, phoneno=? WHERE rollno = ?;";
  db.query(
    sqlUpdate,
    [
      firstname,
      lastname,
      department,
      dob,
      email,
      phoneno,
      rollno,
    ],
    (err, result) => {
      if (err) console.log(err);
      else res.send("Values Updated");
    }
  );
});

app.listen(3306, () => {
  console.log("Running on port 3306");
});
