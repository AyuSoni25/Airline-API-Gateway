const express = require('express');
const { InfoController } = require('../../controllers');
const userRouter = require('./user.routes');

const v1Router = express.Router();

v1Router.get('/info', InfoController.info);
v1Router.use('/user', userRouter);

module.exports = v1Router;