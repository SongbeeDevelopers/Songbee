const jrRequestData = (
  state = {
    requester: "",
    child: "",
    pronunciation: "",
    age: "",
    skill: "",
    emotion: "",
    tempo: "",
    vocal_type: "",
    description: "",
    goals: "",
  },
  action
) => {
  switch (action.type) {
    case "SET_JR_REQUEST_DATA":
      return action.payload;
    case "CLEAR_JR_REQUEST_DATA":
      return {
        requester: "",
        child: "",
        pronunciation: "",
        age: "",
        skill: "",
        emotion: "",
        tempo: "",
        vocal_type: "",
        description: "",
        goals: "",
      };
    default:
      return state;
  }
};

export default jrRequestData;
