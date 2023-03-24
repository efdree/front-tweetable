import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";

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
const ButtonNavLink = styled(NavLink)`
  padding: 4px 16px;
  background: none;
  border: 1px solid ${colors.primary};
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.primary};
`;

const StlyeNavLink = styled(NavLink)`
  padding: 4px 16px;
  background-color: none;
  border: none;
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.primary};
`;

function Navbar() {

  const { user, logout } = useAuth();

  return (
    <Nav>
        {user ? <StlyeNavLink to="/editProfile">Edit Profile</StlyeNavLink> : "" }
        {user ? <ButtonNavLink to="/" onClick={logout}>Logout</ButtonNavLink> : <ButtonNavLink to={"/login"}>Login</ButtonNavLink> }
    </Nav>
  );
}

export default Navbar;
