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
    backing_track: false
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
        delivery_days: false,
        streaming: false,
        extra_verse: false,
        license: false,
        backing_track: false
      };
    default:
      return state;
  }
};

export default requestData;
