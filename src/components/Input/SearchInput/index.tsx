import { InputHTMLAttributes } from "react";
import { Container, SearchInput as InputSearch } from "./style";

type tInput = InputHTMLAttributes<HTMLInputElement>;

const SearchInput = ({ ...rest }: tInput) => {
  return (
    <>
      <Container>
        <InputSearch
         type="text" {...rest} 
         placeholder="Busque o seu conteúdo aqui..."
         />
      </Container>
    </>
  );
};

export { SearchInput };
