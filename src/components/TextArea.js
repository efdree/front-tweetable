import styled from "@emotion/styled";

const StyledInput = styled.textarea`
  border-radius: 8px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #5b7083;
  box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
  min-width: 260px;
  min-height: 160px;
  &:hover {
    outline: 1px solid #1da1f2;
    box-shadow: 0px 0px 6px #1da1f2;
  }
`;

const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
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
