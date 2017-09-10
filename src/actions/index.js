// This is Action Creator. Export so we can use this function in other places.
// It should always return type as a poperty and its value in Capitals.

// When this action creator gets called it returns the return value
// and return value is passed to all the reducers available.
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
