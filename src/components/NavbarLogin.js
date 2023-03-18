import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { NavLink } from "react-router-dom";

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
const ButtonSecondary = styled(NavLink)`
  padding: 4px 16px;
  background: none;
  border: 1px solid ${colors.primary};
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.primary};
`;

const ButtonPrimary = styled(NavLink)`
  padding: 4px 16px;
  background: none;
  border: none;
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.primary};
`;

function NavbarLogin(onclick) {
  return (
    <Nav>
      <ButtonPrimary to="/editProfile">Edit Profile</ButtonPrimary>
      <ButtonSecondary onClick={onclick}>Logout</ButtonSecondary>
    </Nav>
  );
}
export default NavbarLogin;
