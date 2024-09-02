import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { instance } from '../../services/index';


export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/users'); 
      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred.');
    }
  }
);

