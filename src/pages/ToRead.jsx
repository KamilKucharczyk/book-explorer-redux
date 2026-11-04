import { useDispatch, useSelector } from "react-redux";
import { removeFromRead, toggleRead } from "../features/toRead/toReadSlice";

const ToRead = () => {
  const toRead = useSelector((state) => state.toRead);
  const dispatch = useDispatch();

  const allBooks = toRead.length;
  const readBooks = toRead.filter((item) => item.read === true).length;
  const notRead = allBooks - readBooks;
  let progress = 0;
  if (allBooks !== 0) {
    progress = (readBooks / allBooks) * 100;
  }

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
          </li>
        ))}
      </ul>
      <p>All books: {allBooks}</p>
      <p>Read: {readBooks}</p>
      <p>Not read: {notRead}</p>
      <p>Progress: {Math.round(progress)} %</p>
    </div>
  );
};
export default ToRead;
