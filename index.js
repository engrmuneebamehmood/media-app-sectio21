import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from './thunks/fetchUsers'; // Make sure the path is correct
export *  from '../store/thunks/addUsers';
export *  from '../store/thunks/removeUser';
