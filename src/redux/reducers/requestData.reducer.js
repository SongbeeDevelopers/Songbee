const requestData = (
  state = {
    requester: "",
    recipient: "",
    pronunciation: "",
    recipient_relationship: "",
    occasion: "",
    genre: "",
    vocal_type: "",
    vibe: "",
    tempo: "",
    inspiration: "",
    artist: "",
    delivery_days: false,
    streaming: false,
    extra_verse: false,
    license: false,
    backing_track: false,
    total_price: 224.99,
    artist_payout: 100,
  },
  action
) => {
  switch (action.type) {
    case "SET_REQUEST_DATA":
      return action.payload;
    case "CLEAR_REQUEST_DATA":
      return {
        requester: "",
        recipient: "",
        pronunciation: "",
        recipient_relationship: "",
        occasion: "",
        genre: "",
        vocal_type: "",
        vibe: "",
        tempo: "",
        inspiration: "",
        artist: "",
        delivery_days: 6,
        streaming: false,
        extra_verse: false,
        license: false,
        backing_track: false,
        total_price: 224.99,
        artist_payout: 100,
      };
    default:
      return state;
  }
};

export default requestData;
