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
      case "SET_FINAL_QUESTIONS":
        return action.payload;
      case "CLEAR_FINAL_QUESTIONS":
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