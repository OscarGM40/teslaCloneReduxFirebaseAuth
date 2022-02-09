import { configureStore } from '@reduxjs/toolkit';
import userReducer from './../features/userSlice';

export const store =  configureStore({
  reducer: {
    userSlice: userReducer,
  }
});

/* exports wapos */
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;