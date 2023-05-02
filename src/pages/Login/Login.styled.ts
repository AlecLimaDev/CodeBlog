import styled from "styled-components"


export const Login = styled.div`

    text-align: center;

    img {
      height: 58px;
    }
   

 p {
   text-transform: uppercase;
}

h1 {
  font-family: 'Pacifico', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
}

form { 
  border: 1px solid rgb(100, 99, 99);
}

button {
  margin-bottom: 30px;
  width: 100%;
}

a {
  color: #bf40bf;
  font-weight: 800;
  padding: 5px;
}

li {
  list-style: none;
}

@media (max-width: 530px) {
            form {
            /* background-color: red; */
            max-width: 65%;
        }
        
        }

`


