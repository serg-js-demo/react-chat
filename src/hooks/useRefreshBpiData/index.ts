import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { fetchStart, fetchFail, fetchSuccess } from "store/reducers/bpiInfo/actions";

const BPI_URL = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";
const INTERVAL_TIME = 60 * 1000;

const useRefreshBpiData = () => {
  const dispatch = useDispatch();
  const reFetch = useCallback(() => {
    dispatch(fetchStart());
    fetch(BPI_URL)
      .then((res) => res.json())
      .then((data) => dispatch(fetchSuccess(data)))
      .catch(() => dispatch(fetchFail()));
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(reFetch, INTERVAL_TIME);
    reFetch();
    return () => clearInterval(interval);
  }, [reFetch]);
};

export default useRefreshBpiData;
