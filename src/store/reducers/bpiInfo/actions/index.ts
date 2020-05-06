enum BpiResponseActions {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAIL = "FETCH_FAIL",
}

export const fetchStart = () => ({ type: BpiResponseActions.FETCH_START });
export const fetchFail = () => ({ type: BpiResponseActions.FETCH_FAIL });
export const fetchSuccess = (data: any) => ({
  type: BpiResponseActions.FETCH_SUCCESS,
  payload: {
    data,
  },
})

export default BpiResponseActions;
