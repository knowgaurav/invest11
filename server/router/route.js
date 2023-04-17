import { Router } from "express";
import verifySignUp from "../middlewares/verifySignUp.js";
import authJwt from "../middlewares/authJwt.js";
import { registerMail } from '../controllers/mailer.js'

const router = Router();

// Import all controllers
import * as controller from "../controllers/appController.js";
import * as gameController from "../controllers/gameController.js";

// POST Methods
router.route('/register').post(
    [verifySignUp.checkDuplicateUsernameOrEmail],
    controller.register,
    registerMail
);

router.route('/registerMail').post((req, res) => {
    registerMail
});

router.route('/authenticate').post((req, res) => {
    res.end();
});

router.route('/login').post(controller.login);

router.route('/logout').post(controller.logout);

// GET methods
router.route('/user/:username').get(controller.getUser);

router.route('/generateOTP').get(
    controller.verifyUser,
    authJwt.localVariables,
    controller.generateOTP
);

router.route('/verifyOTP').get(controller.verifyOTP);

router.route('/createResetSession').get(controller.createResetSession);

// PUT requests
router.route('/updateUser').put(authJwt.verifyToken, controller.updateUser);

router.route('/resetpassword').put(controller.verifyUser, controller.resetPassword);

// Game Routes
router.route('/addPrediction').put(gameController.addPrediction);

router.route('/declarePredictionResult').put(gameController.declarePredictionResult);

router.route('/getLatestPredictionId').get(gameController.getLatestPredictionId);

router.route('/getWinnings').get(gameController.getWinnings);

export default router;