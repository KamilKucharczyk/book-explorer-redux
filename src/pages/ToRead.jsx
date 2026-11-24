import { useDispatch, useSelector } from "react-redux";
import {
  removeFromRead,
  setNote,
  setRating,
  toggleRead,
} from "../features/toRead/toReadSlice";
import {
  selectAllBooksCount,
  selectAverageRating,
  selectReadBooks,
  selectReadingProgress,
  selectToRead,
  selectUnreadBooks,
} from "../features/toRead/selectors";

const ToRead = () => {
  const dispatch = useDispatch();
  const toRead = useSelector(selectToRead);
  const unreadBooks = useSelector(selectUnreadBooks);
  const readBooks = useSelector(selectReadBooks);
  const progress = useSelector(selectReadingProgress);
  const allBooks = useSelector(selectAllBooksCount);
  const averageRating = useSelector(selectAverageRating);

  const handleToggle = (key) => {
    dispatch(toggleRead(key));
  };
  const handleRemove = (key) => {
    dispatch(removeFromRead(key));
  };

  return (
    <div>
      <ul>
        {toRead.map((item) => (
          <li key={item.key}>
            <p>Title: {item.title}</p>
            <button type="button" onClick={() => handleToggle(item.key)}>
              {item.read ? "Mark as not read" : "Mark as read"}
            </button>
            <button type="button" onClick={() => handleRemove(item.key)}>
              Remove
            </button>
            <select
              value={item.rating}
              onChange={(e) =>
                dispatch(
                  setRating({
                    key: item.key,
                    rating: Number(e.target.value),
                  }),
                )
              }
            >
              <option value={0}>No rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <textarea
              value={item.note}
              onChange={(e) =>
                dispatch(
                  setNote({
                    key: item.key,
                    note: e.target.value,
                  }),
                )
              }
              placeholder="Add note"
            />
          </li>
        ))}
      </ul>
      <p>All books: {allBooks}</p>
      <p>Read: {readBooks}</p>
      <p>Not read: {unreadBooks}</p>
      <p>Progress: {Math.round(progress)} %</p>
      <p>Average rating: {averageRating.toFixed(1)}</p>
    </div>
  );
};
export default ToRead;
