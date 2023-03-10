import styled from "@emotion/styled";

const StyledInput = styled.input`
    border-radius: 8px;
    padding: 8px 12px;
    background: #FFFFFF;
    border: 1px solid #5B7083;
    box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
    max-width: 260px;
    &:focus{
        outline: 1px solid #1DA1F2;
        box-shadow: 0px 0px 6px #1DA1F2;
    }
`;

const StyledLabel = styled.label`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    color: #000000;
`;

function FileInput({
    id,
    name,
    type="file",
    value,
    onChange,
    placeholder,
    label
}){
    return (
        <div>
            {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
            <StyledInput 
                type={type}
                name={name}
                id={id || name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default FileInput;