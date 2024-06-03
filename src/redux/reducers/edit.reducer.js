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
      let newGenreState = {...state}
      if (state.genres.includes(genreValue)) {
        const removeFromGenreState = newGenreState.genres.filter(id => id === genreValue)
        newGenreState = removeFromGenreState
      } else {
        newGenreState.genres.push(genreValue)
      }
      return newGenreState;
    case 'CLEAR_EDIT_DATA':
      return {}
    default:
      return state;
  }
};

export default edit;