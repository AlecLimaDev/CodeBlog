import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;


        img {
            max-width: 600px;
            margin-top: 20px;
            border-radius: 5px;

            &:hover {
            transform: scale(1.4);
            }
        }

        h2 {
            text-transform: none;
            font-family: "Pacifico", cursive;
            font-weight: 300;
            font-size: 30px;
        }

        span {
            font-family: "Pacifico", cursive;
            font-weight: 700;
        }

        p {
            margin-bottom: 2em;
            font-weight: 500;
            text-align: center;
            text-transform: none;
        }   
`;


export const IFrame = styled.iframe`
width: 1024px;
height: 720px;
border-radius: 10px;
margin-top: 15px; 
`