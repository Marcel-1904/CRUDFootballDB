const controller = require("../controllers/football.controller");

module.exports = app => {
    app.get("/football/1", controller.create);
}