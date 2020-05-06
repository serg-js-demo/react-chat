import { combineReducers } from "redux";
import trades from "./trades";
import messages from "./messages";
import users from "./users";
import currentUser from "./currentUser";
import bpiInfo from "./bpiInfo";

const reducers = combineReducers({
  trades,
  users,
  currentUser,
  messages,
  bpiInfo,
});

export default reducers;
