const express = require('express');
const { InfoController } = require('../../controllers');
const userRouter = require('./user.routes');
const { AuthRequestMiddlewares } = require('../../middlewares');

const v1Router = express.Router();

v1Router.get('/info', AuthRequestMiddlewares.checkAuth, InfoController.info);
v1Router.use('/user', userRouter);

module.exports = v1Router;