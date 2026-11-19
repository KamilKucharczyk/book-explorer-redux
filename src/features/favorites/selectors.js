export const selectFavorites = (state) => state.favorites;
export const selectFavoritesNumber = (state) => {
  const favorites = selectFavorites(state);
  return favorites.length;
};
