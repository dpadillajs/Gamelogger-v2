var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  db.Videogames.findAll({
    order: [["title", "ASC"]]
  }).then(gameData => {
    res.render("index", { videogames: gameData });
  });
});

router.post("/api/new", function(req, res) {
  db.Videogames.create({
    console: req.body.console,
    title: req.body.title
  }).then(gameData => {
    res.json({ id: gameData.insertId });
  });
});

router.put("/api/new/:id", function(req, res) {
  db.Videogames.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(gameData => {
    res.json(gameData);
  });
});

router.delete("/api/new/:id", function(req, res) {
  db.Videogames.destroy({
    where: {
      id: req.params.id
    }
  }).then(gameData => {
    res.json(gameData);
  });
});

module.exports = router;
