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
    story1: "",
    story2: "",
    important_what: "",
    important_why: "",
    additional_info: "",
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
        story1: "",
        story2: "",
        important_what: "",
        important_why: "",
        additional_info: "",
      };
    default:
      return state;
  }
};

export default requestData;
