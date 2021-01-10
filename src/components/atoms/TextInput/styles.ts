import styled from "styled-components";

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;

    outline: 0;
    border: 0;

    resize: none;
    padding: 16px;

    box-sizing: border-box;

    ::placeholder {
        color: #8e8e8e;
    }
`;
