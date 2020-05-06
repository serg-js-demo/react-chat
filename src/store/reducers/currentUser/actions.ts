enum CurrentUserActions {
  SET_USER = "SET_CURRENT_USER",
  SET_IS_FAKE_BUYER = "SET_IS_FAKE_BUYER",
}

export const setIsFakeBuyer = (data: boolean) => ({
  type: CurrentUserActions.SET_IS_FAKE_BUYER,
  payload: {
    data,
  },
});

export default CurrentUserActions;
