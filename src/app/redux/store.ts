import { configureStore } from "@reduxjs/toolkit";
import accessReducer from "./slices/accessSlice";
import { combineReducers } from "redux";

type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  access: accessReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type { RootState };
export default store;
