import styled from "styled-components"

export const Register = styled.div`
    text-align: center;

    img {
        max-width: 300px;
        height: 30px;
        padding: 5px;      
      }

    a {
        color: #bf40bf;
        font-weight: 800;
        padding: 5px;
      }

    li {
        list-style: none;
        padding-top: 15px;
        text-transform: none;
    }
    
    a {
        padding: 8px;
    }

    form {
        border: 1px solid rgb(100, 99, 99);
    }

    h1 {
        font-family: 'Pacifico', cursive;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3 {
        color: rgb(100, 99, 99);
        text-transform: none;
    }
    button {
        width: 100%;
    }

    .btn { 
        &:hover {
            background-color: #5BEA1C;
            transition: 2s all;
        }
    }
       

        @media (max-width: 530px) {
            form {
            max-width: 65%;
        }

        }


`



