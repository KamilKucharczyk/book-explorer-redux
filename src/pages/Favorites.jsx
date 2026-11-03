import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../features/favorites/favoritesSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

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
      <p>Favorites: {favorites.length}</p>
    </div>
  );
};
export default Favorites;
