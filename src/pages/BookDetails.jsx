import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../features/favorites/favoritesSlice";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addToRead } from "../features/toRead/toReadSlice";
import { fetchBookDetails } from "../redux/opreations";

const COVER_URL = "https://covers.openlibrary.org/b/id/";

const BookDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { details, error, loading } = useSelector((state) => state.bookDetails);

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  const handleBack = () => {
    navigate(location.state?.from || "/books");
  };

  const handleAddToFav = () => {
    dispatch(addFavorite(details));
  };

  const handleAddToRead = () => {
    dispatch(addToRead(details));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!details) {
    return <p>No details found</p>;
  }

  const bookCover = `${COVER_URL}${details.covers?.[0]}-M.jpg`;

  return (
    <div>
      <h1>Book details</h1>
      <p>Title: {details.title}</p>
      <p>
        Description:{" "}
        {typeof details.description === "string"
          ? details.description
          : details.description?.value}
      </p>
      <p>Subjects: {details.subjects?.join(", ")}</p>
      <img src={bookCover} alt={details.title} />
      <button type="button" onClick={handleBack}>
        Go Back
      </button>
      <button type="button" onClick={handleAddToFav}>
        Add to favorites
      </button>
      <button type="button" onClick={handleAddToRead}>
        Add to read list
      </button>
    </div>
  );
};
export default BookDetails;
