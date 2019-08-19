import { takeEvery ,put } from 'redux-saga/effects';
function* getData (action) { 
const response = yield fetch("http://www.omdbapi.com/?i="+action.payload+"&apikey=93ffb36a").then(function(response){
        return response.json();
    });
  yield put({type: "SET_IMDB_RATING", payload:response})
}
function* rootSaga() {
    yield takeEvery("GET_DATA", getData);
}
export default rootSaga;