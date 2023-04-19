import { combineReducers, configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import user from "./userSlice"

export const store = configureStore({
  reducer: combineReducers({
    user,
  }),
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
