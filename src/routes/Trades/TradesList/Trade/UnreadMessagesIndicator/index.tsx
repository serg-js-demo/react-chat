import styled from "@emotion/styled";
import Colors from "ui/constants/Colors";

type Props = {
  hasNewMessages: boolean;
};

const UnreadMessagesIndicator = styled.div<Props>`
  position: relative;
  top: 3px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ hasNewMessages }) =>
    hasNewMessages ? Colors.GREEN : Colors.GREY
  };
`;

export default UnreadMessagesIndicator;
