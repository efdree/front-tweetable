import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
  gap: 0px;
  width: 600px;
  margin: 4px auto;
`;

const ButtonSecondary = styled(Link)`
  padding: 4px 16px;
  background: none;
  border: 1px solid ${colors.primary};
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.primary};
`;

function NavbarLogout() {
  return (
    <Nav>
      <ButtonSecondary to={"/login"}>Login</ButtonSecondary>
    </Nav>
  );
}
export default NavbarLogout;
