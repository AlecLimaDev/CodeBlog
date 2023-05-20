import styled from "styled-components"


export const Dashboard = styled.div`
  text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  

    h2 {
    font-size: 2.2em;
    margin-bottom: 0.5em;
    }


    p {
    margin-bottom: 1em;
    font-weight: 600;
  }


  @media screen and (max-width: 992px) { 
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

`



  export const NoPosts = styled.div`
        text-align: center;


        p {
           margin-bottom: 1.5em;
        }


        a {
         padding: 10px 25px;
        }

  `
  
 
  export const PostHeader = styled.div`
     display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 10px;
    border-bottom: 2px solid #ccc;

    span {
      font-family: sans-serif;
      text-transform: uppercase;
      font-weight: 800;
    }
  
  `
  
  export const PostRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 10px;
    align-items: center;
    border-bottom: 2px solid #eee;

    /* p {
    color: #eee;
    font-weight: 600;
    } */

    a {
    margin: 0 5px;
    height: 30px;
    width: 100px;
    font-size: 0.7em;
    }

    .actions {
      font-family: sans-serif;
    }


    @media screen and (max-width: 450px) {
      display: flex;
      flex-flow: row wrap;
      max-width: 100%;
      padding: 0.8em;

      .btn {
        padding-bottom: 8px;
      }

      .btn-outline {
          padding: 24px;
      }
      
  }

  
  ` 
  


  
  

  
 
