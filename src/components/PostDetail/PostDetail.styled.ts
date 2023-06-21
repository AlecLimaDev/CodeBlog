import styled from "styled-components";

export const PostDetail = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    margin-bottom: 2em;

    img {
        max-width: 800px;
        margin: 0 auto;
        border-radius: 15px;
    }

    h2 {
        margin-bottom: .4em;
    }


    p {
        font-family: sans-serif;
    }

    .tags {
        margin-bottom: 1.2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tags p {
        margin-right: .5em;
    }

    .tags span {
    font-weight: bold;
    }

    .createdBy {
        font-style: italic;
        font-size: 1em;
        margin-bottom: 1em;
    }


    @media (max-width: 992px) {
     img {
        max-width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .createdBy {
        font-style: italic;
        font-size: 1em;
        margin-bottom: 1em;
    }
  h2 {
        margin-bottom: .4em;
        text-align: center;
    }

    .createdBy {
        font-style: italic;
        /* font-size: 1em;
        margin-bottom: 1em; */
        text-align: center;
    }

    .tags p {
        margin-right: .5em;
        display: flex;
    }

    .post_detail {
        text-align: center;
    }

      .tags {
        margin-bottom: 2em;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 620px) {
     img {
        max-width: 95%;
        /* margin: 0 auto; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

     h2 {
        margin-bottom: 1em;
        text-align: center;
    }

    .createdBy {
        font-style: italic;
        font-size: 1em;
        margin-bottom: 1em;
        text-align: center;
    }
    

     span {
        font-weight: bold;
     } 


     .post_detail {
        text-align: center;
    }

      .tags {
        margin-bottom: 2em;
        display: flex;
        justify-content: center;
    }



    @media (max-width: 450px) {
       img {
        max-width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
    }

      .post_detail {
        text-align: center;
    }

      .tags {
        margin-bottom: 2em;
        display: flex;
        justify-content: center;
    }
  
       h2 {
        margin-bottom: .4em;
    }
  
      .createdBy {
        width: 100%;
    }

}
}
}
`




