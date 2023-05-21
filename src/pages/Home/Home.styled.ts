import styled from "styled-components"


export const Home = styled.div`


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.search_form {
    max-width: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
}


.search_form input {
    margin-right: 10px;
    width: 50%;
    border: 1px solid transparent;
}

.noposts {
    text-align: center;
}

.noposts p {
    margin-bottom: 1.5em;
    text-transform: none;
}

.noposts a {
    padding: 10px 25px;
}


@media (max-width: 476px) {
    h1 {
        text-align: center;
    }

    .search_form {
    width: 85%;
}



}


`

