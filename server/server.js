const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.listen(3000);


app.post('/', async (req, res) => {

    res.sendStatus(200);

});

// app.delete('/api/items/:id', async (req, res) => {
// to get parameters: req.params.id ^^
