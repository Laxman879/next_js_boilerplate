import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
