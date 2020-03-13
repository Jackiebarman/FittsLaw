const mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000

var cors = require('cors');
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'jack1'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
app.use(cors());



app.get('/home', (req, res) => res.send(JSON.stringify({hello:'Hello Jackie!!!!!'})));
app.post('/example',(req,res)=>{
    console.log(req.body);

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

