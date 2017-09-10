// All reducers accept two args - state, action
// state indicates this reducer state and not application state
// we need to assign state as null if it is undefined when the app boots up

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // if none gets satisfied then return current reducer state
  return state;
}
