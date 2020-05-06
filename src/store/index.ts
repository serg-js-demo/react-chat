import { createStore } from "redux";
import reducers from "./reducers";
import { State } from "./types";
import { throttle } from "lodash";

const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("initial-state", serializedState);
  } catch {
    // ignore write errors
  }
};

const store = createStore(reducers);

const save = () => {
  saveState(store.getState());
};

store.subscribe(throttle(save, 1000));

export default store;
