import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: 'config.env' });

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    console.log(token);

    try {
        const verified = await jwt.verify(token, process.env.JWT_TOKEN_SECRET);

        req.userId = verified.id;
        next();
    } catch (err) {
        return res.status(401).send({ message: "Unauthorized, " + err });
    }
};

const localVariables = (req, res, next) => {
    req.app.locals = {
        OTP: null,
        resetSession: false
    }
    next();
}

const authJwt = {
    verifyToken,
    localVariables
};

export default authJwt;