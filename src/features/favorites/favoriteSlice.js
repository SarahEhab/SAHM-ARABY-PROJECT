import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";

const initialState = {
  favProduct:  [],
 
   
    isLoading: false,
    error: null,
  };
  
  
   
  const getFavProducts = createAsyncThunk('get/fav-product', async (token, thunkAPI) => {
    try {
      const response = await baseUrl.get('/favorite'
      ,
       {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      );
      console.log(response.data);
      return response.data; // Removed the comma at the end of the line
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // Use rejectWithValue to handle failures
    }
  });
  


 



  
  



    const favoriteSlice = createSlice({
        name: 'fav',
      
        initialState,
        reducers: {},
        extraReducers: (builder) => {
          builder
            .addCase(getFavProducts.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(getFavProducts.fulfilled, (state, action) => {
              state.favProduct = action.payload;
              state.isLoading = false;
              state.error = null;

            })
            .addCase(getFavProducts.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })


           
  
           

            }}
            );
      export { getFavProducts };
      
      export default favoriteSlice.reducer;