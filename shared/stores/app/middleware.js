import {
  takeEvery,
} from "redux-saga/effects";
import { actions } from './index';


function* watchSetName({ payload }) {
  console.log(`Saga middleware payload`, payload);
};

export default function* appMiddleware() {
  yield takeEvery(actions.setName.toString(), watchSetName);
}