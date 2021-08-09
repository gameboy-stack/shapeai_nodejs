const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;


app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res) => {

    res.sendFile(__dirname + "/index.html")

});

app.post("/", (req,res) =>{

    res.send("<h1>Your Age In Dog Years is : "+ Number(req.body.inputyears)/15 + " dog years.</h1>");
}
)

app.listen(port);