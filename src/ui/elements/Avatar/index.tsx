import styled from "@emotion/styled";

type Props = {
  src: string;
  shadow?: boolean;
};

const Avatar = styled.div<Props>`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: #efefef 4px solid;
  background: url(${({ src }) => src});
  background-size: cover;
  ${({ shadow }) => (shadow && "box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.09);")}  
`;

export default Avatar;
