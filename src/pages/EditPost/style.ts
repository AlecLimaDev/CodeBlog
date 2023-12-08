import styled from "styled-components";

export const EditPost = styled.div`
  text-align: center;

  h2 {
    font-size: 2.2em;
  }

  p {
    margin-bottom: 2em;
    font-weight: 500;
  }

  .preview_title {
    margin-bottom: 1em;
    font-weight: bold;
  }
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  margin-bottom: 1em;

  @media screen and (max-width: 450px) {
    max-width: 100%;
    margin-bottom: 1em;

    h2 {
      font-size: 1.8em;
    }
  }
`;
