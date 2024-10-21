const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');


function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message: "you sre not signin"
        });
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}
