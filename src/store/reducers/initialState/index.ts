import { State } from "store/types";
import getFakeInitialState from "./faker";

let initialState: State | null = null;

const getInitialState = (): State => {
  if (initialState) {
    return initialState;
  }

  const rawState = localStorage.getItem("initial-state") || "";
  if (rawState) {
    const state = JSON.parse(rawState) as State;
    initialState = state;
  } else {
    initialState = getFakeInitialState();
    localStorage.setItem("initial-state", JSON.stringify(initialState));
  }
  return initialState;
};

export default getInitialState;
