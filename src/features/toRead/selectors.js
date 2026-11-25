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

export const selectAverageRating = (state) => {
  const toRead = selectToRead(state);
  const ratedBooks = toRead.filter((item) => item.rating > 0);

  if (ratedBooks.length === 0) {
    return 0;
  }

  const totalRating = ratedBooks.reduce(
    (total, item) => total + item.rating,
    0,
  );
  return totalRating / ratedBooks.length;
};

export const selectYearlyGoal = (state) => Number(state.profile.yearlyGoal);

export const selectYearlyGoalProgress = (state) => {
  const readBooks = selectReadBooks(state);
  const yearlyGoal = selectYearlyGoal(state);
  if (!yearlyGoal || yearlyGoal <= 0) {
    return 0;
  }
  return (readBooks / yearlyGoal) * 100;
};
