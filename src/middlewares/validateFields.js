
const httpResponse = require('../utils/httpResponse');
const httpStatus = require('../utils/httpStatus');

class Validator {
    validateFields(req, res, next) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(httpStatus.BAD_REQUEST).json(httpResponse.Bad_Request);
        };

        next();
    };
}

module.exports = Validator;