const { StatusCodes } = require('http-status-codes');

const { UserService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


/**
 * POST : /signup 
 * req-body {email: 'Ayushi@asd.com', password: '12345678'}
 */
async function signup(req, res) {
    try {
        const user = await UserService.signup({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * GET : /cities 
 * req-body {}
 */
// async function getCities(req, res) {
//     try {
//         const cities = await CityService.getCities();
//         SuccessResponse.data = cities;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse);
//     } catch(error) {
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);
//     }
// }

/**
 * GET : /cities/:id 
 * req-body {}
 */
// async function getCity(req, res) {
//     try {
//         const city = await CityService.getCity(req.params.id);
//         SuccessResponse.data = city;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse);
//     } catch(error) {
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);
//     }
// }

/**
 * DELETE : /cities/:id
 * req-body {}
 */
// async function destroyCity(req, res) {
//     try {
//         const city = await CityService.destroyCity(req.params.id);
//         SuccessResponse.data = city;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse);
//     } catch(error) {
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);
//     }
// }

// async function updateCity(req, res) {
//     try {
//         const city = await CityService.updateCity(req.params.id, {
//             name: req.body.name,
//         });
//         SuccessResponse.data = city;
//         return res
//                 .status(StatusCodes.ACCEPTED)
//                 .json(SuccessResponse);
//     }   catch(error){
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);
//     }
// }

module.exports = {
    signup,
    // getCities,
    // getCity,
    // destroyCity,
    // updateCity
}