import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://openlibrary.org/search.json?q=";
const API_DETAILS_URL = "https://openlibrary.org/works/";

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

export const fetchBookDetails = createAsyncThunk(
  "details/fetchBookDetails",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${API_DETAILS_URL}${id}.json`);
      if (!response.ok) {
        throw new Error("Fetch failed");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
