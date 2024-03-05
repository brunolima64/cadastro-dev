import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #b8b8d4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }
    label {
        font-size: 13px;
        display: block;
        margin-bottom: 20px;
    }
    button {
            background-color: #25CD89;
            color: #FFF;
            font-size: 14px;
            font-weight: bold;
            padding: 20px 40px;
            border: 0;
            border-radius: 30px;
            cursor: pointer;
            margin-top: 30px;
        }
`;
export const ResultData = styled.div`
    font-size: 17px;
    margin-top: 10px;
    padding: 10px;
    text-align: left;
    margin-bottom: 10px;
    border: 2px solid #25cd89;
    border-radius: 10px;
`;