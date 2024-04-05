const soloArtist = (state = [], action) => {
    switch (action.type) {
        case 'SET_SOLO_ARTIST':
            return action.payload;
        default:
            return state;
    }
};

export default soloArtist;