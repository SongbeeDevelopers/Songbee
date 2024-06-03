const edit = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_DATA':
      return action.payload;
    case 'EDIT_INPUT':
      let key = action.payload.key
      let value = action.payload.value
      return { ...state, [key]: value }
    case 'EDIT_ARTIST_GENRES':
      let genreValue = Number(action.payload)
      return {...state, genres: [...state.genres, genreValue]};
    case 'CLEAR_ARTIST_GENRES':
      return {...state, genres: []}
    case 'CLEAR_EDIT_DATA':
      return {}
    default:
      return state;
  }
};

export default edit;