import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import toReadReducer from "../features/toRead/toReadSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
    toRead: toReadReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem("favorites", JSON.stringify(state.favorites));

  localStorage.setItem("toRead", JSON.stringify(state.toRead));

  localStorage.setItem("isLoggedIn", String(state.auth.isLoggedIn));
});
