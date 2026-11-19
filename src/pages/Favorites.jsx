import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../features/favorites/favoritesSlice";
import {
  selectFavorites,
  selectFavoritesNumber,
} from "../features/favorites/selectors";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const favoritesNumber = useSelector(selectFavoritesNumber);
  const handleRemove = (key) => {
    dispatch(removeFavorite(key));
  };
  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => {
          const bookId = favorite.key?.split("/").pop();
          return (
            <li key={favorite.key}>
              <p>Title: {favorite.title}</p>
              <Link to={`/books/${bookId}`}>Details</Link>
              <button type="button" onClick={() => handleRemove(favorite.key)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <p>Favorites: {favoritesNumber}</p>
    </div>
  );
};
export default Favorites;
