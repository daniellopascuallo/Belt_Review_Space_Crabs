const CrabController = require('../controllers/controller.crabs');

module.exports = app => {
    app.get("/api/crabs", CrabController.index);
    app.post("/api/create/crab", CrabController.create);
    app.get("/api/crab/:id", CrabController.show);
    app.put("/api/update/crab/:id", CrabController.update);
    app.delete("/api/delete/crab/:id", CrabController.destroy)
}