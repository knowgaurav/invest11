import UserModel from "../model/User.model.js";

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    // Username
    const searchUsername = await UserModel.findOne({
        username: req.body.username
    });

    if (searchUsername) {
        console.log("User found");
        res.status(500).send({ message: "Failed! Username is already in use!" });
        return;
    }

    // Email
    const searchEmail = await UserModel.findOne({
        email: req.body.email
    });

    if (searchEmail) {
        console.log("User found");
        res.status(500).send({ message: "Failed! Email is already in use!" });
        return;
    }

    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
};

export default verifySignUp;