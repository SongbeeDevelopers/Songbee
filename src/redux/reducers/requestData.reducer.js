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
    delivery_days: "",
    streaming: "",
    extra_verse: "",
    license: "",
    backing_track: ""
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
        delivery_days: "",
        streaming: "",
        extra_verse: "",
        license: "",
        backing_track: ""
      };
    default:
      return state;
  }
};

export default requestData;
