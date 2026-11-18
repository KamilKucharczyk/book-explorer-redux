import { createSlice } from "@reduxjs/toolkit";

const savedProfile = localStorage.getItem("profile");

const initialState = savedProfile
  ? JSON.parse(savedProfile)
  : {
      username: "",
      email: "",
      favoriteGenre: "",
      yearlyGoal: "",
    };

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    saveProfile: (state, action) => {
      return action.payload;
    },
  },
});
export const { saveProfile } = profileSlice.actions;
export default profileSlice.reducer;
