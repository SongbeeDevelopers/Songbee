const edit = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_DATA':
      return action.payload;
    case 'EDIT_INPUT':
      let key = action.payload.key
      let value = action.payload.value
      return {...state, [key]: value}
    case 'CLEAR_EDIT_DATA':
      return {}
    default:
      return state;
  }
};

export default edit;