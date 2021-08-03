
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', function(req, res) {
    console.log(__dirname+ "\Chrysler Building.html")
    //res.send('hi')
    //res.sendFile(path.join(__dirname, "\Chrysler Building.html"));
    res.sendFile(__dirname+ "/public/Chrysler Building.html");
    //res.sendFile(path.join(__dirname, '\\index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})