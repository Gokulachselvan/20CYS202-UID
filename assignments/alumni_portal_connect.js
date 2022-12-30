//1)Prgm to connect to Alumni Database:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
});



//2) Prgm to create Login table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "CREATE TABLE Login ( Login_id varchar(30) NOT NULL PRIMARY KEY, Password varchar(30) NOT NULL UNIQUE, Email varchar(30) NOT NULL UNIQUE,Recovery_Email varchar(30) )";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  
});



//3) Prgm to create Students table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "CREATE TABLE Students ( Roll_no varchar(30) NOT NULL PRIMARY KEY, Name varchar(30) NOT NULL, Login_id varchar(30), Email varchar(30), CONSTRAINT FK_slid FOREIGN KEY (Login_id) REFERENCES Login(Login_id) ON DELETE CASCADE, CONSTRAINT FK_semail FOREIGN KEY (Email) REFERENCES Login(Email) ON DELETE CASCADE )";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  
});



//4) Prgm to create Alumni table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "CREATE TABLE Alumni ( Roll_no varchar(30) NOT NULL PRIMARY KEY, Login_id varchar(30), Email varchar(30) NOT NULL UNIQUE, Name varchar(30) NOT NULL, Phone_no number(11), DOB date, Degree varchar(10), Address varchar(60), Gender varchar(10), Passout_year varchar(4), Occupation varchar(30), Workspace_name varchar(50), Workspace_city varchar(30), CONSTRAINT FK_alid FOREIGN KEY (Login_id) REFERENCES Login(Login_id) ON DELETE CASCADE, CONSTRAINT FK_aemail FOREIGN KEY (Email) REFERENCES Login(Email) ON DELETE CASCADE )";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  
});



//5) Prgm to Faculty table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "CREATE TABLE Faculty ( Faculty_id varchar(30) NOT NULL PRIMARY KEY, Name varchar(30) NOT NULL, Login_id varchar(30), Email varchar(30), CONSTRAINT FK_flid FOREIGN KEY (Login_id) REFERENCES Login(Login_id) ON DELETE CASCADE, CONSTRAINT FK_femail FOREIGN KEY (Email) REFERENCES Login(Email) ON DELETE CASCADE )";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  
});




//6) Prgm to create Social_media table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "CREATE TABLE Social_media ( Roll_no varchar(30), Email varchar(30), Github varchar(100), Instagram varchar(100), Twitter varchar(100), Linkedin varchar(100), CONSTRAINT FK_smrno FOREIGN KEY (Roll_no) REFERENCES Alumni(Roll_no) ON DELETE CASCADE, CONSTRAINT FK_smemail FOREIGN KEY (Email) REFERENCES Alumni(Email) ON DELETE CASCADE )";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("Table created");
    
  });
  
});


//7) Prgm to insert values for login table for alumni:
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "INSERT INTO Login (Login_id, Password, Email, Recovery_Email) VALUES ('login1', 'password1', 'email1@example.com', 'recovery1@example.com')";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("VALUES INSERTED");
    
  });
  
});


//8) Prgm to insert values for login table for faculty:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "INSERT INTO Login (Login_id, Password, Email, Recovery_Email) VALUES ('login2', 'password2', 'email2@example.com', 'recovery2@example.com')";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("VALUES INSERTED");
    
  });
  
});


//9) Prgm to insert values for login table for students:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "INSERT INTO Login (Login_id, Password, Email, Recovery_Email) VALUES ('login3', 'password3', 'email3@example.com', 'recovery3@example.com')";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("VALUES INSERTED");
    
  });
  
});



//10) Prgm to insert values for students table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "INSERT INTO Students (Roll_no, Name, Login_id, Email) VALUES ('roll1', 'John', 'login3', 'email3@example.com')";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("VALUES INSERTED");
    
  });
  
});



//11) Prgm to insert values for login alumni table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "INSERT INTO Alumni (Roll_no, Login_id, Email, Name, Phone_no, DOB, Degree, Address, Gender, Passout_year, Occupation, Workspace_name,Workspace_city) VALUES ('roll1', 'login1', 'email1@example.com', 'John', '1234567890', '2000-01-01', 'Bachelor', '123 Main St', 'Male', '2020', 'Software Engineer', 'ABC Company', 'New York')";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("VALUES INSERTED");
    
  });
  
});



//12) Prgm to insert values for faculty table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "INSERT INTO Faculty (Faculty_id, Name, Login_id, Email) VALUES ('faculty1', 'Jane', 'login2', 'email2@example.com');";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("VALUES INSERTED");
    
  });
  
});



//13) Prgm to insert values for Social_media table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uiteam@03",
  database: "alumni_portal"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  
  var sqlquery = "INSERT INTO Social_media (Roll_no, Email, Github, Instagram, Twitter, Linkedin)VALUES ('roll1', 'email1@example.com', 'https://github.com/username', 'https://instagram.com/username', 'https://twitter.com/username','https://linkedin.com/in/username')";
  
  con.query(sqlquery, function (err, result) {
  
    if (err) throw err;
    console.log("VALUES INSERTED");
    
  });
  
});



