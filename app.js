var express=require('express');
var app = express();

var port = process.env.PORT || 8080

//Allow files on dir to be accesible
app.use(express.static(__dirname));

//rutas
app.get("/", function(req,res) {
    res.render("index");
})

app.listen(port, function() {
   var chequete = console.log("Holi, Todo funciona bien al momento :D");
})
