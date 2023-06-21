import styled from "styled-components"



export const Navbar = styled.nav`




display: flex;
justify-content: center;
align-items: center;
padding: .5em 2em;



.brand {
    font-size: 1.2em;
}


.brand span {
    font-family: 'Pacifico', cursive;
  font-weight: 700;
    color: #bf40bf;
}

.brand p {
    font-family: 'Pacifico', cursive;
  font-weight: 400;
  font-size: large;
    color: #bf40bf;
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


`


export const LinkList = styled.ul`
    display: flex; 
   list-style: none;
   margin-right: 1em;


   li a {
    padding: .4em .6em;
    color: #bf40bf;
    font-weight: 700;
} 

.active {
    background-color: #0000FF;
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
        padding: .2em 3em;
    }  


}

`
    


