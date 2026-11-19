export const selectBooks = (state) => state.books.books;
export const selectBooksTotalResults = (state) => state.books.totalResults;
export const selectBooksLoading = (state) => state.books.loading;
export const selectBooksError = (state) => state.books.error;

export const selectBookDetails = (state) => state.bookDetails.details;
export const selectBookDetailsError = (state) => state.bookDetails.error;
export const selectBookDetailsLoading = (state) => state.bookDetails.loading;
