import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const stockPriceApi = createAsyncThunk(
  "stock/stockPriceApi",
  async (data, { fulfillWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: "https://twelve-data1.p.rapidapi.com/price",
        params: { symbol: data, format: "json", outputsize: "30" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
        },
      };

      const result = await axios(options);
      return fulfillWithValue(result.data.price);
    } catch (error) {
      console.log(error);
    }
  }
);

export const stockTimeSeriesApi = createAsyncThunk(
  "stock/stockTimeSeriesApi",
  async (data, { fulfillWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: "https://twelve-data1.p.rapidapi.com/time_series",
        params: {
          symbol: data,
          interval: "1day",
          outputsize: "30",
          format: "json",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
        },
      };

      const result = await axios(options);
      return fulfillWithValue(result.data);
    } catch (error) {
      console.log(error);
    }
  }
);
