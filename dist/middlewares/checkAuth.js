"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
exports.default = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error("No token provided");
    }
    const tokenParts = authHeader.split(" ");
    if (tokenParts.length != 2) {
        throw new Error("Token error");
    }
    const [scheme, token] = tokenParts;
    if (!/^Bearer$/i.test(scheme)) {
        throw new Error("Token malformatted");
    }
    const decodedToken = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET);
    (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET, (error) => {
        if (error)
            throw new Error(error.message);
        request.user_id = decodedToken.id;
        // console.log(decodedToken.id);
    });
    next();
};
