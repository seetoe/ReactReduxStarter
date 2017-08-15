// reducer is only called when action occurs
// state argument is not application state,
// only the state this reducer is responsible for

// must always return defined value
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      // never mutate state. just return fresh object
      return action.payload;
  }

  return state;
}
