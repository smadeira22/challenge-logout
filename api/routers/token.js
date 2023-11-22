const { Router } = require('express');

const tokenController = require('../controllers/token.js');

const tokenRouter = Router();

tokenRouter.delete("/:token", tokenController.destroy);

module.exports = tokenRouter;