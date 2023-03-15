import styled from "@emotion/styled";

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border-radius: 8px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #5b7083;
  box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
  width: 260px;
  &:focus {
    outline: 1px solid #1da1f2;
    box-shadow: 0px 0px 6px #1da1f2;
  }
`;

const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
`;

function TextInput({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <Content>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInput
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Content>
  );
}

export default TextInput;
