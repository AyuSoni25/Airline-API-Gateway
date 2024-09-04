const express = require('express');

const { UserController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const userRouter = express.Router();

// /api/v1/signup POST
userRouter.post('/', UserController.signup);

// /api/v1/airplanes GET
// airplaneRouter.get('/', AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET
// airplaneRouter.get('/:id', AirplaneController.getAirplane);

// /api/v1/airplanes/:id DELETE
// airplaneRouter.delete('/:id', AirplaneController.destroyAirplane);

// /api/v1/airplanes/:id PATCH
// airplaneRouter.patch('/:id', AirplaneController.updateAirplane);

module.exports = userRouter;