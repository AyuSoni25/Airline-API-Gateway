const express = require('express');

const { UserController } = require('../../controllers');
const { AirplaneMiddleware, AuthRequestMiddlewares } = require('../../middlewares');

const userRouter = express.Router();

// /api/v1/user/signup POST
userRouter.post('/signup', AuthRequestMiddlewares.validateAuthRequest, UserController.signup);

// /api/v1/user/signin POST
userRouter.post('/signin', AuthRequestMiddlewares.validateAuthRequest, UserController.signin);

module.exports = userRouter;