import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://openlibrary.org/search.json?q=";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error("Fetch failed");
      }
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  },
);
