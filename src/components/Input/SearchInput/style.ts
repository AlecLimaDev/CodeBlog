import styled from "styled-components";

export const SearchInput = styled.input`
    width: 40%;
    margin-bottom: 40px;

    
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 476px) {
        input {
            width: 70%;
        }
     }


`