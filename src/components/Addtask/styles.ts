import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    border: 1px solid #555;
    margin: 20px 0;
    padding: 10px;
    border-radius: 10px;

    span {
        color: #555;
        font-size: 30px;
    }

    input {
        padding: 10px;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 20px;
        color: #555;

        &::placeholder {
            color: #555;
        }
    }
`