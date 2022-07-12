const jwt = require('jsonwebtoken');

class generateToken {

    static tokenSign(newUser) {
        return jwt.sign(
            {
                id: newUser.id,
                trainer: newUser.trainerId
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        )
    }

    static async verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {
            return null
        }

    }

}


module.exports = generateToken