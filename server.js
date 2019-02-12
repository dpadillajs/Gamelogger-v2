var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/videogames_controller");

app.use(routes);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
