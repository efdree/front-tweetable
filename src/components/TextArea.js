import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const StyledInput = styled.textarea`
  border-radius: 8px;
  padding: 8px 12px;
  background: ${colors.white};
  border: 1px solid ${colors.secondaryText};
  box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
  min-width: 260px;
  min-height: 160px;
  &:hover {
    outline: 1px solid ${colors.primary};
    box-shadow: 0px 0px 6px ${colors.primary};
  }
`;

const StyledLabel = styled.label`
  color: ${colors.black};
`;

function TextArea({ id, name, value, onChange, placeholder, label }) {
  return (
    <div>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInput
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
