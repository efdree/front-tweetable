import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const Header = styled.div`
  padding: 16px 0px;
  max-width: 600px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: ${colors.black};
  margin: 0 auto;
  background-color: ${colors.white};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export default Header;
