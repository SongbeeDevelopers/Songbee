const finalQuestions = (
    state = {
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
  
  export default finalQuestions;