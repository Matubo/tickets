import { act } from "react-dom/test-utils";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sage from "./sage";

function storeReducer(
  state = {
    listOfTickets: [],
    liked: 0,
    fetching: false,
    firstInit: true,
  },
  action
) {
  if (action.type === "getNewListOfTickets") {
    return state;
  }
  if (action.type === "setNewListTickets") {
    return {
      listOfTickets: action.newListOfTickets,
      liked: 0,
      fetching: state.fetching,
    };
  }
  if (action.type === "addLikedTickets") {
    console.log("test");
    return {
      listOfTickets: state.listOfTickets,
      liked: state.liked + 1,
      fetching: state.fetching,
    };
  }
  if (action.type === "removeLikedTickets") {
    return {
      listOfTickets: state.listOfTickets,
      liked: state.liked - 1,
      fetching: state.fetching,
    };
  }
  if (action.type === "startFetching") {
    return {
      listOfTickets: state.listOfTickets,
      liked: state.liked,
      fetching: true,
    };
  }
  if (action.type === "endFetching") {
    return {
      listOfTickets: state.listOfTickets,
      liked: state.liked,
      fetching: false,
    };
  }
  return state;
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sage);

export default store;
