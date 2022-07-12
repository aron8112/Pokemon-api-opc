const httpResponse = require('../utils/httpResponse');
const httpStatus = require('../utils/httpStatus');
const { verifyToken } = require('../utils/generateToken');

class Auth {
    async logUser(req, res, next) {

        try {
            if (!req.headers.authorization) {
                res.status(httpStatus.FORBIDDEN).json(httpResponse.Forbidden);
            }
            const token = req.headers.authorization.split(" ").pop();
            const tokenData = await verifyToken(token);
            if (!tokenData.id) {
                res.status(httpStatus.FORBIDDEN).json(httpResponse.Forbidden);
            }
            else {
                next();
            }
        }
        catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: 'Something went wrong'
            });
        }
    }
};

module.exports = {
    Auth
}