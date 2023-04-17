import UserModel from "../model/User.model.js";

export async function addPrediction(req, res) {
    const newPrediction = {
        date: req.body.date,
        time: req.body.time,
        stockName: req.body.stockName,
        stockSymbol: req.body.stockSymbol,
        currentPrice: req.body.currentPrice,
        direction: req.body.direction
    }
    const username = req.body.username;

    try {
        const user = await UserModel.findOne({ username });

        if (user) {
            await UserModel.updateOne(
                { username },
                { $push: { predictions: newPrediction } },
                { new: true },
            ).then(async () => {
                return res.status(201).send({ msg: "Prediction Inserted..." });
            }).catch(err => {
                throw err;
            });
        } else {
            return res.status(401).send({ error: "User Not Found..." });
        }
    } catch (error) {
        return res.status(500).send({ error });
    }
}

export async function getLatestPredictionId(req, res) {
    const username = req.body.username;

    try {
        const user = await UserModel.findOne({ username });
        if (user) {
            const predictionId = user.predictions[user.predictions.length - 1]._id;
            return res.status(201).send({ msg: "Last Prediction Inserted Id...", id: predictionId });
        } else {
            return res.status(401).send({ error: "User Not Found..." });
        }

    } catch (err) {
        return res.status(500).send({ msg: "Something went wrong: ", err });
    }
}

export async function declarePredictionResult(req, res) {
    const id = req.body.id;
    const username = req.body.username;
    const futurePrice = parseFloat(req.body.futurePrice);
    const currentPrice = parseFloat(req.body.currentPrice);
    const direction = req.body.direction;
    const flag = futurePrice - currentPrice >= 0 ? true : false;

    const prediction = {
        date: req.body.date,
        time: req.body.time,
        stockName: req.body.stockName,
        stockSymbol: req.body.stockSymbol,
        currentPrice: req.body.currentPrice,
        futurePrice: req.body.futurePrice,
        direction: req.body.direction,
    }

    if ((direction === "Buy" && flag) || (direction === "Sell" && !flag)) {
        prediction.result = "Correct call";
    } else {
        prediction.result = "Wrong call";
    }

    try {
        const user = await UserModel.findOne({ username });

        if (user) {
            await UserModel.findOneAndUpdate(
                { username: username, "predictions._id": id },
                { $set: { "predictions.$": { prediction } } },
            );

            if (prediction.result === "Correct call") {
                const newWinnings = parseInt(user.winnings) + 10;
                await UserModel.findOneAndUpdate(
                    { username },
                    { $set: { "winnings": newWinnings } },
                );
            } else {
                const newWinnings = parseInt(user.winnings) - 10;
                await UserModel.findOneAndUpdate(
                    { username },
                    { $set: { "winnings": newWinnings } },
                );
            }

            return res.status(200).send({ msg: "Prediction result updated...", prediction });
        } else {
            return res.status(401).send({ error: "User Not Found..." });
        }
    } catch (error) {
        return res.status(500).send({ msg: "Something went wrong: ", error });
    }
}

export async function getWinnings(req, res) {
    const username = req.body.username;

    try {
        const user = await UserModel.findOne({ username });
        if (user) {
            const winnings = user.winnings;
            return res.status(201).send({ msg: "Lastest Winnings...", winnings });
        } else {
            return res.status(401).send({ error: "User Not Found..." });
        }

    } catch (err) {
        return res.status(500).send({ msg: "Something went wrong: ", err });
    }
}

export async function addToTop5Picks(req, res) {
    const username = req.body.username;
    const date = req.body.date;
    const stockName = req.body.stockName;
    const stockSymbol = req.body.stockSymbol;
    const currentPrice = req.body.currentPrice;

    try {
        const user = await UserModel.findOne({ username });

        if (user) {
            await UserModel.findOneAndUpdate(
                { username: username, "predictions._id": id },
                { $set: { "predictions.$": { prediction } } },
            );

            return res.status(200).send({ msg: "Prediction result updated...", prediction });

        } else {
            return res.status(401).send({ error: "User Not Found..." });
        }
    } catch (error) {
        return res.status(500).send({ msg: "Something went wrong: ", error });
    }

}

