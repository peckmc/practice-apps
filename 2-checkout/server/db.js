const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => {
    let query = `CREATE TABLE IF NOT EXISTS responses (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      session_id VARCHAR(255) UNIQUE,
      name VARCHAR(255),
      email VARCHAR(255),
      password VARCHAR(255),
      address1 VARCHAR(255),
      address2 VARCHAR(255),
      city VARCHAR(255),
      state VARCHAR(255),
      zip INT(5),
      cc VARCHAR(255),
      exp VARCHAR(255),
      cvv INT(3),
      bzip INT(5)
    )`
    db.queryAsync(query);
  })
  .catch((err) => console.log('error creating db', err));

db.add = function(data, session_id) {
  let query = `INSERT INTO responses (session_id, name, email, password, address1, address2, city, state, zip, cc, exp, cvv, bzip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.queryAsync(query, [
    session_id,
    data.name,
    data.email,
    data.password,
    data.address1,
    data.address2,
    data.city,
    data.state,
    data.zip,
    data.cc,
    data.exp,
    data.cvv,
    data.bzip
  ])
  .catch((err) => { return new Error(err); });
};

module.exports = db;
