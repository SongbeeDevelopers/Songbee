import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import userRequests from "./userRequests.reducer";
import genres from "./genres.reducer";
import completedRequests from "./completedRequests.reducer";
import pendingRequests from "./pendingRequests.reducer";
import currentRequest from "./currentRequest.reducer";
import newOrder from "./newOrder.reducer";
import requestData from "./requestData.reducer";
import allUsers from "./allUsers.reducer";
import filterResults from "./filterResults.reducer";
import pendingArtists from "./pendingArtists.reducer";
import allArtists from "./allArtists.reducer";
import juniorRequests from "./juniorRequest.reducer";
import jrRequestData from "./jrRequestData.reducer";
import artistProfile from "./artistProfile.reducer";
import pendingEdits from "./pendingEdits.reducer";
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  userRequests,
  genres,
  completedRequests,
  pendingRequests,
  currentRequest,
  newOrder,
  requestData,
  allUsers,
  filterResults,
  pendingArtists,
  allArtists,
  juniorRequests,
  jrRequestData,
  artistProfile,
  pendingEdits,
});

export default rootReducer;
