import { Action as ReduxAction } from "redux";

export type Payload<S> = {
  data: S;
};

export type Action<A> = {
  type: A;
  payload: any;
};

export type ActionCreator<S, A> = (data: S) => Action<A>;

export type Reducer<S, A> = (s: S, a: Action<A>) => S;

export default Reducer;
