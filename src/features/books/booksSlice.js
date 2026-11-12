import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  totalResults: 0,
  loading: false,
  error: "",
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {},
});
