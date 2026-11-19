export const selectToRead = (state) => state.toRead;
export const selectAllBooksCount = (state) => selectToRead(state).length;
export const selectReadBooks = (state) => {
  const toRead = selectToRead(state);
  return toRead.filter((item) => item.read === true).length;
};
export const selectUnreadBooks = (state) => {
  const allBooks = selectAllBooksCount(state);
  const readBooks = selectReadBooks(state);
  return allBooks - readBooks;
};

export const selectReadingProgress = (state) => {
  const allBooks = selectAllBooksCount(state);
  const readBooks = selectReadBooks(state);

  if (allBooks === 0) {
    return 0;
  }
  return (readBooks / allBooks) * 100;
};
