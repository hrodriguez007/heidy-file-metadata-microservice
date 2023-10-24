var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer  = require('multer')

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
const upload = multer({ dest: 'uploads/' })
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// method="POST" action="/api/fileanalyse"
app.post("/api/fileanalyse", (req, res) => {

});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
