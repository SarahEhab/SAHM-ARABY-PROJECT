import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";
import toast, { Toaster } from 'react-hot-toast';
const initialState = {
    userLogin:{},
  userRegister:{},
  isLoading: false,
  error: null,
}; 


const registerUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
    try {
      const response = await baseUrl.post(
        '/users',formData);
        console.log(response);
        console.log(response.data);
      return response.data;
    } catch (error) {
      return error
    }
  });
  
 

  const createLoginUser = createAsyncThunk('auth/login', async ({ formData, token }, thunkAPI) => {
    try {
      const response = await baseUrl.post(
        '/loginUser',
        formData,
        {
          headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*', // Update this with your whitelist domains
            'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With',
            'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
          }
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle errors properly, you may want to throw the error instead of returning it
      throw error;
    }
  });
  

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder


     
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userRegister = action.payload;
        state.isLoading = false;
        state.error = null;
        toast.success('تم  انشاء حساب بنجاح')
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error("حدث خطأ في انشاء الحساب  برجاء المحاولة مرة اخري")
      })


      .addCase(createLoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createLoginUser.fulfilled, (state, action) => {
        state.userLogin = action.payload;
        state.isLoading = false;
        state.error = null;
        toast.success('تم تسجيل الدخول بنجاح')

      })
      .addCase(createLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error("حدث خطأ في تسجيل الدخول برجاء المحاولة مرة اخري")

      })

	  
	  }}
      );
export { registerUser ,createLoginUser };

export default authSlice.reducer;