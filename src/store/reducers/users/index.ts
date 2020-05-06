import Actions from "./actions";
import Reducer from "store/reducers/Reducer";
import { Users } from "store/types";
import getInitialState from "store/reducers/initialState";

const users: Reducer<Users, Actions> = (
  state = getInitialState().users,
  action
) => {
  switch (action.type) {
    case Actions.SET_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

export default users;
