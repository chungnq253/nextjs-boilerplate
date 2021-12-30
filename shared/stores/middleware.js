import { all } from "redux-saga/effects";

import appMiddleware from "./app/middleware";

export default function* rootSaga() {
  yield all([
    appMiddleware(),
  ]);
}
