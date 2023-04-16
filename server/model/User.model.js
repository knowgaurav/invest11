// import mongoose from "mongoose";

// export const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, "Please provide a username"],
//         unique: [true, "Username already exists"]
//     },
//     password: {
//         type: String,
//         required: [true, "Please provide a password"],
//         unique: false
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide an email"],
//         unique: [true, "Email already in use"]
//     },
//     firstName: { type: String },
//     lastName: { type: String },
//     mobile: { type: Number },
//     address: { type: String },
//     profile: { type: String },
//     top5Picks: {
//         date: Date,
//         time: String,
//         stocks: [{
//             stockName: String,
//             stockSymbol: String,
//             currentPrice: Number,
//             futurePrice: Number,
//             result: String
//         }]
//     },
//     predictions: [{
//         stockName: String,
//         stockSymbol: String,
//         currentPrice: Number,
//         futurePrice: Number,
//         direction: String,
//         result: String
//     }]
// });

// export default mongoose.model.Users || mongoose.model('User', UserSchema);

import mongoose from "mongoose";

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
    top5Picks: {
        date: Date,
        time: String,
        stocks: [{
            stockName: String,
            stockSymbol: String,
            currentPrice: Number,
            futurePrice: Number,
            result: String
        }]
    },
    predictions: [{
        stockName: String,
        stockSymbol: String,
        currentPrice: Number,
        futurePrice: Number,
        direction: String,
        result: String
    }]
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);