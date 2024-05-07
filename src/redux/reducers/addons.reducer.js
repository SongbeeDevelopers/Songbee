const addons = (state = {
  streaming: false,
  extra_verse: false,
  backing_track: false,
  license: false,
}, action) => {
  switch (action.type) {
    case 'SET_ADDON_DATA':
      let key = action.payload
      return {...state, [key]: !state[key]};
    default:
      return {
        streaming: false,
        extra_verse: false,
        backing_track: false,
        license: false,
      };
  }
};

export default addons;