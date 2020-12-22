const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const pg = require('pg');
const cors = require('cors');
const users = require('./routes/blog');
// const sequelize = new Sequelize('postgres://nptphqnv:ZEzRXKID2zZQO3mZpye_p1nWyOERnwF5@suleiman.db.elephantsql.com:5432/nptphqnv')
// const sequelize = new Sequelize('test', 'root', '', {
//   host: "127.0.0.1",
//   dialect : 'mysql'
// });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use('/blog', users);
  
const conString = "postgres://nptphqnv:ZEzRXKID2zZQO3mZpye_p1nWyOERnwF5@suleiman.db.elephantsql.com:5432/nptphqnv"
// const client = new pg.Client(conString);
// client.connect(function(err){
//     if(err){
//         return console.error('could not connect to postgres', err);
//     }
//     client.query('SELECT NOW() AS "theTime"', function(err, result) {
//         if(err) {
//           return console.error('error running query', err);
//         }
//         console.log(result.rows[0].theTime);
//         // >> output: 2018-08-23T14:02:57.117Z
//         client.end();
//       });
// });

app.get('/', (req, res) => { res.send('its working') })

app.listen(PORT, () => {
  console.log(`app is running on PORT:${PORT}`);
})