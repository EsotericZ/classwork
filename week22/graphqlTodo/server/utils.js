const jwt = require('jsonwebtoken');
const secret = 'bfjudkmvgklanbvajkljkfdbjskrd';
const expiration = 1000*60*60;

module.exports = {
    signToken: function(firstName, _id) {
        const payload = {firstName, _id};
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}