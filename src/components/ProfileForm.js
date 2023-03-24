import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "./Button";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 2px auto 0px auto;
  padding: 50px 0px 16px 0px;
  gap: 8px;
  background-color: ${colors.white};
`;

const ContButton = styled.div``;

const SPAN = styled.span`
margin: 4px 0 0 0;
  font-size: 13px;
  color: #e64646;
`
;

function ProfileForm({
  onsubmit,
  valueEmail,
  valueUsername,
  valueName,
  valuePassword,
  valuePasswordConfirm,
  onChangeFile,
  onchange,
  error,
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
{error.password && <SPAN >{error.password}</SPAN>}
      <TextInput
        name="confirmPassword"
        value={valuePasswordConfirm}
        onChange={onchange}
        placeholder=""
        label="Password Confirmation"
        type="password"
      />
{error.confirmPassword && (
          <SPAN>{error.confirmPassword}</SPAN>
        )}
      <ContButton>
        <Button type="submit">Submit</Button>
      </ContButton>
    </ContentForm>
  );
}

export default ProfileForm;
