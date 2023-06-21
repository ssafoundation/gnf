import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const initialState = {
  isLoading: false,
  login: "",
  error: "",
};

export const loginUser = createAsyncThunk("user/createUser", async (value) => {
  console.log(value);
  const response = await axios.post(
    `http://localhost:9000/api/auth/login`,
    value
  );
  return response.data;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    //login user
    builders.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
      state.login = [];
      state.error = "";
    });
    builders.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.login = action.payload;
      state.error = "";
    });
    builders.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.login = [];
      state.error = action.error.message;
    });
  },
});
// export default loginSlice.reducer;
const persistConfig = {
  keyPrefix: "gnf-",
  key: "login",
  storage,
};
export default persistReducer(persistConfig, loginSlice.reducer);
