const mysql = require("mysql2");

let config =  { host: process.env.DB_HOST,
user: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
port: 3306   
};


const connection = mysql.createConnection(config);

function connect() {
    connection.connect((err) => {
        if (err) {
            console.error("Error connecting to the database:", err);
            setTimeout(connect, 5000)
            return;
        }
        console.log("Database is connected");
    });
}

connect();



module.exports = connection;