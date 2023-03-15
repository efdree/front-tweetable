import styled from "@emotion/styled";
import Button from "./Button";
import TextInput from "./TextInput";
import { Link } from "react-router-dom";

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 2px auto;
  padding: 50px 0px 16px 0px;
  gap: 8px;
  background-color: white;
`;

const ContButton = styled.div``;

const PrimaryLink = {
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

function ProfileForm({
  onsubmit,
  valueEmail,
  valueUsername,
  valueName,
  valuePassword,
  valuePasswordConfirm,
  onChangeFile,
  onchange,
  profile,
}) {
  return (
    <ContentForm onSubmit={onsubmit}>
      <TextInput
        name="email"
        value={valueEmail}
        onChange={onchange}
        placeholder=""
        label="Email"
        type="email"
      />
      <TextInput
        name="username"
        value={valueUsername}
        onChange={onchange}
        placeholder=""
        label="Username"
      />
      <TextInput
        name="name"
        value={valueName}
        onChange={onchange}
        placeholder=""
        label="name"
      />
      <TextInput
        name="avatar"
        onChange={onChangeFile}
        placeholder=""
        label="Avatar"
        type="file"
      />
      <TextInput
        name="password"
        value={valuePassword}
        onChange={onchange}
        placeholder=""
        label="Password"
        type="password"
      />
      <TextInput
        name="password_confirm"
        value={valuePasswordConfirm}
        onChange={onchange}
        placeholder=""
        label="Password Confirmation"
        type="password"
      />
      <ContButton>
        <Button type="submit">Submit</Button>
      </ContButton>
      <Link to={profile} style={PrimaryLink}>
        {profile === "/login" ? "Login" : "Cancel my account"}
      </Link>
    </ContentForm>
  );
}

export default ProfileForm;
