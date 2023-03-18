import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const Button = styled.button`
  padding: 8px 16px;
  background: ${colors.primary};
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.white};
  border: none;
  &:hover {
    background: hsla(215, 14%, 34%, 1);
  }
`;

export default Button;
