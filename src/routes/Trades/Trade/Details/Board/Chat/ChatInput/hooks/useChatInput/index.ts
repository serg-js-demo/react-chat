import { useState, useCallback } from "react";
import { CurrentUser, TradeItem } from "store/types";
import { useDispatch } from "react-redux";
import { sendMessage } from "store/reducers/messages/actions";
import { setPaid } from "store/reducers/trades/trade/actions";

type Props = {
  currentUser: CurrentUser;
  trade: TradeItem | null;
};

const useChatInput = ({ currentUser, trade }: Props) => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const { isFakeBuyer, id } = currentUser;
  const submit = useCallback(
    (e) => {
      e.preventDefault();
      if (!value || !trade) {
        return;
      }

      if (isFakeBuyer && value === 'PAID') {
        dispatch(setPaid(trade.id));
        setValue("");
        return;
      }

      dispatch(sendMessage({
        tradeId: trade.id,
        fromId: isFakeBuyer ? trade.traderId : id,
        message: value,
      }));
      setValue("");
    },
    [id, isFakeBuyer, value, trade, dispatch]
  );

  const handleChange = useCallback((e) => setValue(e.target.value), [setValue]);

  return {
    submit,
    value,
    handleChange
  };
};



export default useChatInput;
