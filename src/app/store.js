import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import favReducer from "../features/favorites/favoriteSlice"
// import questionReducer from "../features/questions/questionSlice"

const store = configureStore({
  reducer: {
    auth:authReducer,
    fav:favReducer,
    // question:questionReducer ,

  },
});

export default store;