import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import otpGenerator from 'otp-generator';
import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: 'config.env' })

/* POST: http://localhost:5000/api/register
@params: {
    "username": "example123",
    "password": "admin123",
    "email": "example123@example.com",
    "firstName": "bill",
    "lastName": "william",
    "mobile" : 8009860560,
    "address": "Apt. 556, Kulas Light, Gwenborough",
    "profile" : ""
}
*/
export async function register(req, res) {
    const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        profile: req.body.profile,
        winnings: 0
    });

    user.save()
        .then(result => res.status(201).send({ msg: "User Register Successfully" }))
        .catch(error => res.status(500).send({ error }))
};

/* POST: http://localhost:5000/api/login
@params: {
    "username": "example123",
    "password": "admin123"
}
*/
export async function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    try {
        UserModel.findOne({ username })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(passwordCheck => {
                        if (!passwordCheck) return res.status(400).send({ error: "Don't have the password" });

                        // create JWT token
                        const token = jwt.sign({
                            userId: user._id,
                            username: user.username,
                        }, process.env.JWT_TOKEN_SECRET, { expiresIn: "24h" });

                        return res.status(200).send({
                            msg: "Login successful...",
                            username: user.username,
                            token
                        });
                    })
                    .catch(error => res.status(400).send({ error: "Password does not match." }))
            })
            .catch(error => {
                return res.status(404).send({ error: "Username not Found!" });
            })
    } catch (error) {
        return res.status(500).send({ error });
    }
}

export async function logout(req, res) {
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
        return res.status(500).send({ err });
    }
};

/* GET: http://localhost:5000/api/user/example123
*/
export async function getUser(req, res) {

    const { username } = req.params;

    try {
        if (!username) return res.status(500).send({ error: "Invalid Username" });

        const user = await UserModel.findOne({ username });

        if (!user) return res.status(500).send({ error: "Couldn't Find the User" });

        const { password, ...rest } = Object.assign({}, user.toJSON());

        return res.status(201).send(rest);

    } catch (error) {
        return res.status(404).send({ error: "Cannot Find User Data" });
    }

}

/* PUT: http://localhost:5000/api/updateUser
*/
export async function updateUser(req, res) {
    try {
        const { username } = req.query;
        // console.log(username);
        const user = await UserModel.findOne({ username });

        if (user) {
            const body = req.body;

            await UserModel.updateOne({ username }, body).
                then(() => {
                    return res.status(201).send({ msg: "Record Updated...!" });
                }).catch(err => {
                    throw err;
                })

        } else {
            return res.status(401).send({ error: "User Not Found...!" });
        }

    } catch (error) {
        return res.status(401).send({ error });
    }
}

/* GET: http://localhost:5000/api/generateOTP
*/
export async function generateOTP(req, res) {
    req.app.locals.OTP = await otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false
    });
    res.status(201).send({ code: req.app.locals.OTP });
}

/* GET: http://localhost:5000/api/verifyOTP
*/
export async function verifyOTP(req, res) {
    const { code } = req.query;
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: 'Verify Successsfully!' })
    }
    return res.status(400).send({ error: "Invalid OTP" });
}

// successfully redirect user when OTP is valid
/* GET: http://localhost:5000/api/createResetSession
*/
export async function createResetSession(req, res) {
    if (req.app.locals.resetSession) {
        return res.status(201).send({ flag: req.app.locals.resetSession })
    }
    return res.status(440).send({ error: "Session expired!" })
}

/* PUT: http://localhost:5000/api/resetPassword
*/
export async function resetPassword(req, res) {
    try {
        if (!req.app.locals.resetSession) return res.status(440).send({ error: "Session expired!" });

        const { username, password } = req.body;

        try {
            const user = await UserModel.findOne({ username });

            if (user) {
                const hashedPassword = bcrypt.hashSync(password, 8);
                await UserModel.updateOne({ username }, hashedPassword)
                    .then(() => {
                        req.app.locals.resetSession = false;
                        return res.status(201).send({ msg: "Record Updated...!" });
                    }).catch(err => {
                        throw err;
                    })

            } else {
                return res.status(401).send({ error: "User Not Found...!" });
            }
        } catch (error) {
            return res.status(401).send({ error })
        }
    }
    catch (error) {
        return res.status(500).send({ error })
    }
}

// middleware for verify user
export async function verifyUser(req, res, next) {
    try {

        const { username } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await UserModel.findOne({ username });
        if (!exist) return res.status(404).send({ error: "Can't find User!" });
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error" });
    }
}