import mongoose from "mongoose";

export const stockPredictionSchema = new mongoose.Schema({
    date: { type: String },
    time: { type: String },
    stockName: { type: String },
    stockSymbol: { type: String },
    currentPrice: { type: Number },
    futurePrice: { type: Number },
    direction: { type: String },
    result: { type: String },
});

export const top5PicksSchema = {
    date: Date,
    stocks: [{
        stockName: String,
        stockSymbol: String,
        currentPrice: Number,
        futurePrice: Number,
        result: String
    }]
}

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true,
    },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: Number },
    address: { type: String },
    profile: { type: String },
    top5Picks: [
        top5PicksSchema
    ],
    predictions: [
        stockPredictionSchema
    ],
    winnings: { type: Number }
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);