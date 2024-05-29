import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import profileReducer from './profileSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    profile: profileReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
