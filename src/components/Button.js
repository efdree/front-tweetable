import styled from "@emotion/styled"

const Button = styled.button`
    padding: 8px 16px;
    background: #1DA1F2;
    border-radius: 100px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    corsor: pointer;
    &:hover {
        background: hsla(215, 14%, 34%, 1);
    }
`

export default Button;