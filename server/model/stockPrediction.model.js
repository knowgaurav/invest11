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

export default mongoose.model.StockPrediction || mongoose.model('StockPrediction', stockPredictionSchema);