import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import createTicketsObject from "./objectForStore";


function* fetchTickets(action) {
  yield put({ type: "startFetching" });
  let data = yield call(() => {
    return new Promise((resolve, reject) => {
      let newObj;
      setTimeout(() => {
        newObj = createTicketsObject();
        resolve(newObj);
      }, 1000);
    });
  });
  console.log(data);
  yield put({ type: "setNewListTickets", newListOfTickets: data });
  yield put({ type: "endFetching" });
}

function* sage() {
  yield takeLatest("getNewListOfTickets", fetchTickets);
}

export default sage;
