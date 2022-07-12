const bcrypt = require('bcryptjs');
const httpStatus = require('../utils/httpStatus');
const httpResponse = require('../utils/httpResponse');
const TrainerServices = require('../trainer/services');
const generateToken = require('../utils/generateToken');
const User = require('./model');

class UserServices {

    static async signup(req, res) {

        const {
            name,
            gender,
            password,
            region,
            trainerId
        } = req.body;

        let newUser = User.build({
            name,
            gender,
            password,
            region,
            trainerId
        });

        const salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync(newUser.password, salt);
        newUser.trainerId = TrainerServices.createId;

        const token = generateToken.tokenSign(newUser);

        try {
            await newUser.save()
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(httpResponse.Internal_Server_Error);
        }
        res.status(httpStatus.CREATED).json(httpResponse.Created, newUser.trainerId, token)
    };

    static async login(req, res) {

        const {
            body: {
                name,
                password
            },
        } = req;
        try {
            const userFound = await User.findOne({
                where: {
                    name
                }
            });

            if (userFound) {
                const matchPassword = bcrypt.compareSync(password, userFound.password);
                if (matchPassword) {
                    res.status(httpStatus.OK).json({
                        token: generateToken.tokenSign(userFound)
                    });

                } else {
                    res.status(httpStatus.BAD_REQUEST).json(httpResponse.Bad_Request);
                }
            } else {
                res.status(httpStatus.BAD_REQUEST).json(httpResponse.Bad_Request)
            }
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(httpResponse.RESPONSE_INTERNAL_SERVER_ERROR)
        }
    }
};

module.exports = {
    UserServices
};