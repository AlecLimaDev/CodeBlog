import styled from "styled-components"



export const About = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-transform: none;
    }

    p {
        /* color: #aaa; */
        margin-bottom: 2em;
        font-weight: 500;
        text-align: center;
        text-transform: none;
    }

    a {
        display: block;
        margin-top: 15px;
        padding: 10px 15px;
    }

    .btn { 
        &:hover {
            background-color: #5BEA1C;
            transition: 2s all;
        }
    }



`




