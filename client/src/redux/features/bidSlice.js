import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
import { stockPriceApi } from "./stockDataSlice";
import api from "../../axios.config";

const initialState = {
  error: "",
  loading: "",
  winnings: "",
};

export const makeBidApi = createAsyncThunk(
  "bid/makeBidApi",
  async (data, { dispatch, getState, fulfillWithValue }) => {
    try {
      const stockCurrentPrice = await dispatch(stockPriceApi(data.symbol))
        .unwrap()
        .then((res) => {
          return res;
        });
      let newData = {
        date: moment().format("DD/M/YY"),
        time: moment().format("hh:mm a"),
        stockName: data.name,
        stockSymbol: data.symbol,
        currentPrice: stockCurrentPrice,
        direction: data.call,
        username: getState().auth.data.username,
      };
      console.log(newData);
      const result = await api.put("/api/addPrediction", newData);
      console.log(result);
      return fulfillWithValue();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getWinningsApi = createAsyncThunk(
  "bid/getWinningsApi",
  async (data, { fulfillWithValue, getState }) => {
    try {
      const result = await api.get("/api/getWinnings", {
        username: getState().auth.data.username,
      });
      console.log(result);
      return fulfillWithValue(result.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const bidSlice = createSlice({
  name: "bid",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(makeBidApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(makeBidApi.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(getWinningsApi.fulfilled, (state, action) => {
      state.winnings = action.payload;
    });
  },
});

export default bidSlice.reducer;
