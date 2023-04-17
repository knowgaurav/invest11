import mongoose from "mongoose";



export default mongoose.model.top5Picks || mongoose.model('top5Pick', stockPredictionSchema);