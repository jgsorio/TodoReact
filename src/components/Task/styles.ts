import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps) => (
    `
        display: flex;
        background-color: #20212c;
        padding: 10px;
        border-radius: 10px;
        margin: 10px 0;
        align-items: center;

        label {
            font-size: 20px;
            color: #CCC;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }

        input {
            height: 30px;
            width: 20px;
            margin-right: 10px;
            cursor: pointer;
        }
    `
))

