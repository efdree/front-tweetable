import styled from "@emotion/styled";
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
const ButtonSecondary = {
  padding: "4px 16px",
  background: "none",
  border: "1px solid #1DA1F2",
  borderRadius: "100px",
  letterSpacing: "0.1em",
  color: "#1DA1F2",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  corsor: "pointer",
};

const ButtonPrimary = {
  padding: "4px 16px",
  background: "none",
  border: "none",
  borderRadius: "100px",
  letterSpacing: "0.1em",
  color: "#1DA1F2",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  corsor: "pointer",
};

function NavbarLogin(onclick) {
  return (
    <Nav>
      <NavLink to="/editProfile" style={ButtonPrimary}>
        Edit Profile
      </NavLink>
      <NavLink style={ButtonSecondary} onClick={onclick}>
        Logout
      </NavLink>
    </Nav>
  );
}
export default NavbarLogin;
