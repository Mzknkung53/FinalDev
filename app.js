const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

app.use(bodyParser.json());

app.use(express.static('public'));

//  const db = mysql.createConnection({
//      host: "127.0.0.1",
//      user: "root",
//      password: "Ned0930519556",
//      database: "backoffice"
//  });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'adminlogin.html'));
});

// app.post('/books/add', (req, res) => {
//     const { bookName } = req.body; 
//     const sql = 'INSERT INTO books (BookName) VALUES (?)'; 

//     db.execute(sql, [bookName], (error, results) => { 
//         if (error) {
//             console.error('Error inserting into the database: ', error);
//             return res.status(500).send('Internal Server Error');
//         }
//         console.log('Inserted book into database:', results);
//         res.redirect('/'); 
//     });
// });


// app.get('/books', (req, res) => {
//     const sql = 'SELECT * FROM books'; 

//     db.query(sql, (err, rows) => {
//         if (err) {
//             console.error('Error fetching books from the database: ', err);
//             return res.status(500).send('Internal Server Error');
//         }
//         console.log('Retrieved books from database:', rows);
//         res.json(rows); 
//     });
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  }); 

