import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/api';
import { userAPI } from './api/userApi';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, userAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
