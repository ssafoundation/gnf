import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../store/auth/authSlice";
import loginReducer from "../store/auth/loginSlice";
const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["Login"],
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
  },
});

const persistor = persistStore(store);
export { persistor, store };
