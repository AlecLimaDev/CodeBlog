import styled from "styled-components"


export const CreatePost = styled.div`
    text-align: center;
    text-transform: none;
    

    h2 {
    font-size: 2.2em;
    }

    p {
    margin-bottom: 2em;
    }

.btn {
    &:hover {
        background-color: #5BEA1C;
    }
}

form {
    border: 1px solid rgb(100, 99, 99);
}



@media screen and (max-width: 450px) { 
    form {
        max-width: 80%;
    }
}

`


export const Label = styled.label`

span { 
    font-family: sans-serif;
}


`


export const Input = styled.input`
    
`




