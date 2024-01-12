import styled from "styled-components";

export const Login = styled.div`
display: flex;


form ul h1 {
  font-size: 40px;
}

form ul img {
  max-width: 600px;
  height: 100px;
}

  img {
    max-width: 300px;
    height: 30px;
    padding: 5px;
  }

  p {
    text-transform: uppercase;
    text-align: center;
  }

  h1 {
    font-family: "Pacifico", cursive;
    font-weight: 300;
    text-align: center;
  }

  form {
    border: 1px solid rgb(100, 99, 99);
    width: 40%;
    margin: 0 auto;
    padding: 15px;
    text-align: center;
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
`;
