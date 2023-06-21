import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

export const createUser = createAsyncThunk("user/createUser", async (value) => {
  console.log(value);
  const response = await axios.post(
    `http://localhost:9000/api/auth/singup`,
    value
  );

  return response.data;
});

const authSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
      state.users = [];
      state.error = "";
    });
    builders.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = [action.payload];
      state.error = "";
    });
    builders.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
export default authSlice.reducer;
