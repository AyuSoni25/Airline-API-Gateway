const express = require('express');

const { UserController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const userRouter = express.Router();

// /api/v1/user/signup POST
userRouter.post('/signup', UserController.signup);

// /api/v1/user/signin POST
userRouter.post('/signin', UserController.signin);

module.exports = userRouter;