import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 0.5em 2em;
  list-style: none;
  height: 100vh;
  width: 200px;
  position: fixed;
  text-align: center;
  font-size: 20px;
  background-color: #252526;
  border-right: 5px solid white;


          img {
            width: 50px;
          }

          li {
            list-style: none;
          }

          .active {
            background-color: #0000ff;
            color: #fff;
          }

          li {
            margin: 10px;
          }

          li a {
            color: #bf40bf;
            text-align: center;
            font-weight: 700;
          }

          .brand {
            font-size: 1.2em;
          }

          .brand span {
            font-family: "Pacifico", cursive;
            font-weight: 700;
            color: #bf40bf;
          }

          .brand p {
            font-family: "Pacifico", cursive;
            font-weight: 400;
            font-size: large;
            color: #bf40bf;
            padding-bottom: 15px;
          }

          @media screen and (max-width: 992px) {
            max-width: 100%;
            display: flex;
            justify-content: space-evenly;
          }

          @media screen and (max-width: 535px) {
            max-width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }
`;

export const Section = styled.section`
      background-color: #252526;
      padding: 0.4em 0.2em;
      box-shadow: 0 0 30px black;
      width: 100%;
      position: fixed;
      z-index: 5;
`;

export const LinkList = styled.ul`
      display: block;
      position: absolute;
      left: 0;
      list-style: none;

                li {
                  margin: 10px;
                }

                li a {
                  padding: 0.4em 0.6em;
                  color: #bf40bf;
                  font-weight: 700;
                }

                .active {
                  background-color: #0000ff;
                  color: #fff;
                }

                button {
                  color: #e32d40;
                  font-weight: 500;
                }

                @media screen and (max-width: 535px) {
                  display: wrap;
                  flex-wrap: wrap;
                  justify-content: center;
                  margin-right: 0.8em;
                  letter-spacing: 0.1em;
                  margin-bottom: 1em;

                  li a {
                    padding: 0.2em 3em;
                  }
                }
`;
