import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://openlibrary.org/search.json?q=";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ search, page, limit }, thunkAPI) => {
    try {
      const response = await fetch(
        `${API_URL}${encodeURIComponent(search)}&page=${page}&limit=${limit}`,
      );
      if (!response.ok) {
        throw new Error("Fetch failed");
      }
      const data = await response.json();

      return {
        books: data.docs,
        totalResults: data.numFound,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
