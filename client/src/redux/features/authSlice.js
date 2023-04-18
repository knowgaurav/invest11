import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../axios.config";

const initialState = {
  error: "",
  loading: false,
  data: "",
  user: "",
};

export const loginApi = createAsyncThunk(
  "auth/loginApi",
  async (data, { fulfillWithValue }) => {
    try {
      const result = await api.post("/api/login", data);
      return fulfillWithValue(result.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const registerApi = createAsyncThunk(
  "auth/registerApi",
  async (data, { fulfillWithValue }) => {
    try {
      const result = await api.post("/api/register", data);
      console.log(result);
      return fulfillWithValue();
    } catch (error) {
      console.log(error);
    }
  }
);

export const userDataApi = createAsyncThunk(
  "auth/userDataApi",
  async (data, { fulfillWithValue, getState }) => {
    try {
      const result = await api.get(
        `/api/user/${getState().auth.data.username}`
      );
      return fulfillWithValue(result.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const logoutUserApi = createAsyncThunk(
  "auth/logoutUserApi",
  async (data, { fulfillWithValue, getState }) => {
    try {
      const result = await api.post("/api/logout", {
        username: getState().auth.user.username,
        password: getState().auth.user.password,
      });
      console.log(result);
      return fulfillWithValue();
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(loginApi.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });

    builder.addCase(registerApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerApi.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });

    builder.addCase(userDataApi.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authSlice.reducer;
