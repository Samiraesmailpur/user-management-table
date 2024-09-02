import { createSlice, Reducer } from '@reduxjs/toolkit';
import { getUsers } from './operations';


type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
};

export interface UserState {
  userData: User | null;
  isLoading: boolean;
  error: string | null;
}

const userInitialState: UserState = {
  userData: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        return {
          ...state,
          isLoading: true
        };
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        return {
          ...state,
          userData: action.payload,
          isLoading: false,
          error: null
        };
      })
      .addCase(getUsers.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload || 'An unknown error occurred.'
        };
      });
  }
});


export const userReducer = userSlice.reducer as Reducer<UserState>;