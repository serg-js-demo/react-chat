import styled from "@emotion/styled";
import Colors from "ui/constants/Colors";
import { TradeItemStatus } from "store/types";

type Props = {
  status: TradeItemStatus;
};

const Status = styled.span<Props>`
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  color: ${({ status }) => (status === "PAID" ? Colors.GREEN : Colors.GREY)};
`;

export default Status;
