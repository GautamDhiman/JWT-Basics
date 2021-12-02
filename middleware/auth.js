const jwt = require('jsonwebtoken')
const { unauthorized } = require('../errors/index')


const authenticationMiddleware = async (req, res, next) => {
    
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        throw new unauthorized('No Token Provided');
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded;
        req.user = {id, username};
        next();

    } catch (error) {
        throw new unauthorized('Not Authorized to access this route');
    }

}

module.exports = authenticationMiddleware