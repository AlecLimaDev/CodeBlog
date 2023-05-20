import * as Styles from "./CreatePost.styled";
import { URL } from 'node:url';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument.tsx";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<any>([]);
  const [formError, setFormError] = useState("");
  const { insertDocument, response } = useInsertDocument("posts");
  const { user }: any = useAuthValue();

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormError("");

    try {
        new URL(''); 
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const tagsArray: any = tags.split(",").map((tag: any) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/");
  };

  return (
    <Styles.CreatePost>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <Styles.Label>
          <span>Título:</span>
          <Styles.Input
            type="text"
            name="title"
            required
            placeholder="Pense em um bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Styles.Label>
        <Styles.Label>
          <span>URL da imagem:</span>
          <Styles.Input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </Styles.Label>
        <Styles.Label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          >
          </textarea>
        </Styles.Label>
        <Styles.Label>
          <span>Tags:</span>
          <Styles.Input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e: any) => setTags(e.target.value)}
            value={tags}
          />
        </Styles.Label>
        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </Styles.CreatePost>
  );
};

export default CreatePost;
