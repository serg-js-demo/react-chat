import styled from "@emotion/styled";

type Props = {
  dark?: boolean;
  bold?: boolean;
  fontSize?: string;
  color?: string;
};

const Text = styled.span<Props>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  color: ${({ dark, color }) => (color ? color : (dark ? "#333" : "#A0A0A0"))};
  ${({ bold }) => bold && "font-weight: 700;"};  
`;

export default Text;
