const jrCheckoutData = (
    state = {
      pack_id: "",
      age: null,
      name: "",
      pronunciation: "",
    },
    action
  ) => {
    switch (action.type) {
      case "SET_JR_CHECKOUT_DATA":
        return action.payload;
      case "CLEAR_JR_CHECKOUT_DATA":
        return {
            pack_id: "",
            age: null,
            name: "",
            pronunciation: "",
          };
      default:
        return state;
    }
  };
  
  export default jrCheckoutData;