import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border-radius: 8px;
  padding: 8px 12px;
  background: ${colors.white};
  border: 1px solid ${colors.secondaryText};
  box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
  width: 260px;
  &:focus {
    outline: 1px solid ${colors.primary};
    box-shadow: 0px 0px 6px ${colors.primary};
  }
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  color: ${colors.black};
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
